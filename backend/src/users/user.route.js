const express = require('express');
const router = express.Router();

const { login } = require('./user.controller');



router.post('/admin', login);


module.exports = router;