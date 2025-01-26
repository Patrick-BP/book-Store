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
   
    try{
        const newBook = new bookModel(req.body)
        await newBook.save()
        res.status(201).json(newBook)
    }
    catch(error){
        console.log(error)
    }
    
}

const getBook = async (req, res) => {
    const bookId = req.params.id.trim()
    try{
        const response = await bookModel.findById(bookId);
        res.send(response)

    }catch(error){
        console.log(error)
    }
}

const updateBook = async (req, res) => {
    const bookId = req.params.id.trim()
    try{
        const findBook = await bookModel.findById(bookId);
        if(!findBook){
            res.status(404).send({message: "Book not found!"})
        }else{
            const response = await bookModel.findByIdAndUpdate(bookId,
                {$set: req.body},
                {new: true, runValidators: true}
            )

            res.status(200).send({message:"Book updated successfully"})
        }

    }catch(error){
        console.log(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        await bookModel.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Book was Deleted"})
        
    } catch (error) {
        console.log(error)

    }
}


module.exports ={
    getBooks,
    addNewBook,
    getBook,
    updateBook,
    deleteBook,

}