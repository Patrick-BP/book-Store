const express = require('express');
const { getBooks, addNewBook, getBook, updateBook, deleteBook  } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

const router = express.Router();

router.get('/', getBooks); 
router.post('/new-book', verifyAdminToken ,addNewBook);
router.get('/:id', getBook);
router.put('/edit/:id', verifyAdminToken , updateBook);
router.delete('/del/:id' , verifyAdminToken , deleteBook);

module.exports = router;