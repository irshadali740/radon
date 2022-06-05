const Bookmodel = require("../models/bookmodel")

const createbook = async function (req, res){
    let data = req.body
    let savebooks = await Bookmodel.create(data)
    res.send({msg: savebooks})
}

const getBookData = async function (req, res){
    let allBooks = await Bookmodel.find()
    res.send({msg: allBooks})
} 

module.exports.createbook = createbook
module.exports.getBookData = getBookData
