const express = require('express');
const {createOrder, getOrdersByEmail  } = require('./order.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();


router.post('/new-order', verifyAdminToken, createOrder);
router.get('/:email', getOrdersByEmail);


module.exports = router;