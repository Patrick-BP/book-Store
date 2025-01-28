const express = require('express');
const UserModel = require('./user.model');
const jwt = require('jsonwebtoken'); // Fixed jwt import
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Register a new user
const register = async (req, res) => {
    const { username, password } = req.body;
    const cryptedPassword = bcrypt.hashSync(password, 10);
    try {
        const user = await new UserModel({ // Added await
            username,
            password: cryptedPassword,
            role: "admin"
        }).save();
        res.status(201).json({
            message: "User created successfully!",
            user: { username: user.username }
        });
    } catch (error) {
        res.status(400).send({ 
            message: "Failed to create user!",
            error: error.message // Added error details for debugging
        });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await UserModel.findOne({ username });
        if (!admin) {
            return res.status(404).send({ message: "Admin not found!" }); // Added return
        }
        if (!bcrypt.compareSync(password, admin.password)) {
            return res.status(401).send({ message: "Invalid password!" }); // Added return
        }
        
        const token = jwt.sign(
            { 
                id: admin._id, 
                username: admin.username, 
                role: admin.role 
            }, 
            JWT_SECRET, 
            { expiresIn: '1h' }
        );
        res.status(200).json({
            token,
            message: "Login successful!",
            user: { username: admin.username, role: admin.role }
        });
    } catch (error) {
        res.status(401).send({ 
            message: "Failed to login as admin", 
            error: error.message 
        });
    }
}

module.exports = { login, register };