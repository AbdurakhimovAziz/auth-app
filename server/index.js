const express = require('express');
const cors = require('cors');
const users = require('./routes/users');
const auth = require('./routes/auth');
const db = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', users);
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' });
});

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
