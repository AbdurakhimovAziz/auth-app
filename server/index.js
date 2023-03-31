const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('dotenv').config();

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const db = require('./db');
const { handleError } = require('./utils');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/passport')(passport);
const auth = passport.authenticate('jwt', { session: false });

app.use('/users', auth, usersRouter);
app.use('/auth', authRouter);
app.use(handleError);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
