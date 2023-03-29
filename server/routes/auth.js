const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

router.post('/register', async (req, res) => {
  try {
    const newUser = await userService.create(req.body);

    res.json({ message: 'Registered successfully', user: newUser });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);

    if (user.status === 'blocked') {
      res.status(403).json({ message: 'User is blocked' });
    }

    if (user) {
      userService.update(user.id, { loginTime: new Date() });
      res.json({ message: 'Logged in successfully', user: user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
