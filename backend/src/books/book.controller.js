const express = require('express');
const bookModel = require('./book.model');



 const getBooks = async (req, res) =>{
    try{
    const response = await bookModel.find()
    res.status(200).json(response)
    }
    catch(error){
       console.log(error)
    }  
}
const addNewBook = async (req, res) => {
    console.log(res.body)
    try{
        const newBook = new bookModel(req.body)
        await newBook.save()
        res.status(201).json(newBook)
    }
    catch(error){
        console.log(error)
    }
    
}

const getBook = async (req, res) => {}

const updateBook = async (req, res) => {}

const deleteBook = async (req, res) => {}


module.exports ={
    getBooks,
    addNewBook,
    getBook,
    updateBook,
    deleteBook,

}