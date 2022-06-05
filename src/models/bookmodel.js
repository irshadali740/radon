const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
 bookname: String,
 author: String,
 category: String,
 year: {
     type: String,
     required: true
 }
}, { timestamps : true});

module.exports = mongoose.model('Book',bookSchema)