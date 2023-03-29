const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

router.get('/', async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await userService.getById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
