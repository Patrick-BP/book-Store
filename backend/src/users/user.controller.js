const express = require('express');
const UserModel = require('./user.model');
const { JsonWebTokenError } = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET_KEY

const login = async (req, res) => {
   const {username, password} = req.body;
    try{
        const admin = await UserModel.findOne({username})
        if(!admin){
            res.status(404).send({message: "Admin not found!"})
        
        }
        if(username.password !== admin.password){
            res.status(401).send({message: "Invalid password!"})
        }
        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role}, JWT_SECRET, {expiresIn: '1h'})
        res.status(200).json({token, message:"Login successful!", user:{usernname: admin.username,role: admin.role}})
    }
    catch(error){
        res.status(401).send({message:"Faild to login as admin"})
    }
    
}

module.exports = {login};