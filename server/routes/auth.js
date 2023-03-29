const express = require('express');
const router = express.Router();

router.post('/register', () => console.log('register'));
router.post('/login', () => {});

module.exports = router;
