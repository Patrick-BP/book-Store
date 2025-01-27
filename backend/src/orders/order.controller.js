const express = require('express');
const orderModel = require('./order.model');



//  const getBooks = async (req, res) =>{
//     try{
//     const response = await bookModel.find()
//     res.status(200).json(response)
//     }
//     catch(error){
//        console.log(error)
//     }  
// }
const createOrder = async (req, res) => {
   
    try{
        const newOrder = new orderModel(req.body)
        await newOrder.save()
        res.status(201).json(newOrder)
    }
    catch(error){
        console.log(error)
    }
    
}

const getOrdersByEmail = async (req, res) => {
    const email = req.params.email.trim()
    try{
        const response = await orderModel.findByEmail(email);
        res.send(response)

    }catch(error){
        console.log(error)
    }
}

// const updateBook = async (req, res) => {
//     const bookId = req.params.id.trim()
//     try{
//         const findBook = await bookModel.findById(bookId);
//         if(!findBook){
//             res.status(404).send({message: "Book not found!"})
//         }else{
//             const response = await bookModel.findByIdAndUpdate(bookId,
//                 {$set: req.body},
//                 {new: true, runValidators: true}
//             )

//             res.status(200).send({message:"Book updated successfully"})
//         }

//     }catch(error){
//         console.log(error)
//     }
// }

// const deleteBook = async (req, res) => {
//     try {
//         await bookModel.findByIdAndDelete(req.params.id)
//         res.status(200).send({message:"Book was Deleted"})
        
//     } catch (error) {
//         console.log(error)

//     }
// }


module.exports ={
    createOrder,
    getOrdersByEmail,
 

}