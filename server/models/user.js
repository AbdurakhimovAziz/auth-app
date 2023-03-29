const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registerTime: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  loginTime: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  status: {
    type: DataTypes.ENUM('active', 'blocked'),
    defaultValue: 'active',
  },
});

(async () => {
  await User.sync({ alter: false });
})();

module.exports = User;
