const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    isHardCover: { type: Boolean, default: false},
    publisher:{
        type: ObjectId,
        ref: "publisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
