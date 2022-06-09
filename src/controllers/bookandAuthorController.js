const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/AuthorModel")

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getallBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.find().
    res.send({msg: savedData})
}

const bookbychetanBhagat = async function (req,res){
    let data = await AuthorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
    let bookdata = await BookModel.find({author_id:data[0].author_id})
    res.send({msg: bookdata})
}


const authoroftwostates = async function(req,res){
    let data = await BookModel.findOneAndUpdate({author_name: "Two states"},{$set:{prices:100}},{new:true})
    let authordata = await AuthorModel.find({author_id:data.author_id}).select("author_name")
    let newprice = data.prices
    res.send({msg: authordata,newprice})
}

const bookcost = async function(req,res){
    let data = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let arr=[]
    for (let i=0;i<bookcost.length;i++){
    let bookcostdata = AuthorModel.forEach({author_id:data.author_id}).select({author_name:1,_id:0})
    arr.push(bookcostdata)
    res.send({msg: arr})
    }
        
    // });({author_id:data.author_id}).select("author_name")
    // let bookscost = AuthorModel.forEach(bookcostdata).select("author_name")
    res.send({msg: bookcostdata})
}


module.exports.createBook= createBook
module.exports.createauthor = createauthor
module.exports.bookbychetanBhagat=bookbychetanBhagat
module.exports.authoroftwostates = authoroftwostates
module.exports.bookcost = bookcost
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }

// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks