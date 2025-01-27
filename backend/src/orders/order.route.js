const express = require('express');
const {createOrder, getOrdersByEmail  } = require('./order.controller');
const router = express.Router();


router.post('/new-order', createOrder);
router.get('/:email', getOrdersByEmail);


module.exports = router;