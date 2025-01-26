const express = require('express');
const { getBooks, addNewBook, getBook, updateBook, deleteBook  } = require('./book.controller');
const router = express.Router();

router.get('/', getBooks); 
router.post('/new-book', addNewBook);
router.get('/:id', getBook);
router.put('/edit/:id', updateBook);
router.delete('/del/:id', deleteBook);

module.exports = router;