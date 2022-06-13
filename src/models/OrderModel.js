const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
// const date1 =  mongoose.Schema.Types.Mixed

const orderSchema = new mongoose.Schema( {
    userId:{
             type: ObjectId,
            ref: "UserModel" }, 
    productId: {
        type: ObjectId,
        ref: "productmodel"}, 
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
    

}, { timestamps: true });

module.exports = mongoose.model('ordermodel', orderSchema) 

//users

 // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }

    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")