const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    trending: { type: Boolean, default:false, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    newPrice: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
},{
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model('Book', bookSchema);