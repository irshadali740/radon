const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel = require("../models/publishermodel")

const createAuthor= async function (req, res) {
    let book = req.body
    let bookCreated = await authorModel.create(book)
    res.send({data: bookCreated})
}

const createpublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publishermodel.create(publisher)
    res.send({data: publisherCreated})
}

const BookspublisherAuthor = async function (req, res) {
    let bookswithauthor= req.body
    let specificBook = await bookModel.create(bookswithauthor)
    res.send({data: specificBook})

}

const listpublisherandauthor = async function(req, res){
    let allbooks =await bookModel.find().populate(['publisher' , 'author_id'])
        res.send({msg: allbooks})                                
}

 const bookswithcondition = async function(req, res){   4 

}

const updateboolean = async function(req, res){
    let newboolean = await bookModel.updateMany(
        {publisher: ["Harper Collins" , "Penguin"]},
       { $set: {isHardCover: true}},
       { new: true },
    )
    res.send({msg: newboolean})
}

module.exports.createAuthor= createAuthor
module.exports.createpublisher=createpublisher
module.exports.BookspublisherAuthor=BookspublisherAuthor
module.exports.listpublisherandauthor=listpublisherandauthor
module.exports.updateboolean=updateboolean






// sales : {$gt: 20, $lt: 100}