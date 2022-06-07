const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    Name: String, 
    author_id: {
        type: Number,
        required: true},
        prices: Number,
        ratings: Number,
    

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


 // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }

    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")