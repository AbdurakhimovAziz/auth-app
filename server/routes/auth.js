const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');
const { issueJWT } = require('../utils');

router.post('/register', async (req, res, next) => {
  try {
    const user = await userService.getByEmail(req.body.email);
    if (user) res.status(409).json({ message: 'User already exists' });
    const newUser = await userService.create(req.body);
    res.json({ message: 'Registered successfully', id: newUser.id });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    if (!user) res.status(401).json({ message: 'Invalid credentials' });
    else if (user.status === 'blocked') {
      res.status(403).json({ message: 'User is blocked' });
    } else {
      const userWithJWT = issueJWT(user);
      userService.update(user.id, { loginTime: new Date() });
      res.json({ message: 'Logged in successfully', ...userWithJWT });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
