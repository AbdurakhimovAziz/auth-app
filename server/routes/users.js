const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

router.get('/', async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  } catch (error) {
    next(error);
  }
});

router.put('/block', async (req, res, next) => {
  try {
    const number = await userService.blockUsers(req.body);
    res.json({ message: 'Users blocked successfully', number });
  } catch (error) {
    next(error);
  }
});

router.put('/unblock', async (req, res, next) => {
  try {
    const number = await userService.unblockUsers(req.body);
    res.json({ message: 'Users unblocked successfully', number });
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  try {
    const number = await userService.deleteUsers(req.body);
    res.json({ message: 'Users deleted successfully', number });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
