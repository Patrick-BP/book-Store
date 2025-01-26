const express = require('express');
const { getBooks, addNewBook, getBook, updateBook, deleteBook  } = require('./book.controller');
const router = express.Router();

router.get('/', getBooks); 
router.post('/', addNewBook);
router.get('/:id', getBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;