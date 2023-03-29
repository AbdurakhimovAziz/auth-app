module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '20025101',
  DB: 'usersdb',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
