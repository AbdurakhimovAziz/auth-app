const bcrypt = require('bcrypt');
const User = require('../models/user');

class UserService {
  create(user) {
    return User.create({
      name: user.name,
      email: user.email,
      password: bcrypt.hashSync(user.password, 10),
      status: user.status || 'active',
    });
  }

  getAll() {
    return User.findAll();
  }

  getById(id) {
    return User.findOne({ where: { id: id } });
  }

  getByEmail(email) {
    return User.findOne({ where: { email: email } });
  }

  update(id, user) {
    return User.update(user, { where: { id: id } });
  }

  async login(email, password) {
    const user = await this.getByEmail(email);
    return user && bcrypt.compareSync(password, user.password) ? user : null;
  }
}

module.exports = new UserService();
