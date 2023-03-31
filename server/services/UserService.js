const bcrypt = require('bcrypt');
const User = require('../models/user');

class UserService {
  async create(user) {
    return User.create({
      name: user.name,
      email: user.email,
      password: bcrypt.hashSync(user.password, 10),
      status: user.status || 'active',
    });
  }

  async getAll() {
    return User.findAll();
  }

  async getById(id) {
    return User.findOne({ where: { id: id } });
  }

  async getByEmail(email) {
    return User.findOne({ where: { email: email } });
  }

  async update(id, user) {
    return User.update(user, { where: { id: id } });
  }

  async blockUsers(ids) {
    return User.update({ status: 'blocked' }, { where: { id: ids } });
  }

  async unblockUsers(ids) {
    return User.update({ status: 'active' }, { where: { id: ids } });
  }

  async deleteUsers(ids) {
    return User.destroy({ where: { id: ids } });
  }

  async login(email, password) {
    const user = await this.getByEmail(email);
    return user && bcrypt.compareSync(password, user.password) ? user : null;
  }
}

module.exports = new UserService();
