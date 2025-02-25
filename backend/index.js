const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require('cors');
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route');
const getAdminRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin.stats');

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*', // Allow all origins to connect to our server
    credentials: true, // Allow credentials to be sent in the request
}))

const port = process.env.PORT || 5000

// book routes
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', getAdminRoutes);
app.use('/api/admin', adminRoutes);

 // Connect to MongoDB database
mongoose.connect(process.env.DB_URL)
.then(() => console.log("db Connected"))
.catch((err) => console.log(err))

app.listen(port, () =>{console.log(`Server running on port ${port}`)})