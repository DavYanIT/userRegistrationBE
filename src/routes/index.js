const express = require('express');
const router = express.Router();
const loginController = require('../controller/login');
const registrationController = require('../controller/registration');

router.post('/login', loginController);
router.post('/register', registrationController);

module.exports = router;
