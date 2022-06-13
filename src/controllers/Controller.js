const { count } = require("console")
const userModel= require("../models/userModel")
const productModel = require('../models/productModel')
const Ordermodel = require("../models/OrderModel")

const createproduct = async function (req,res){
    let data1 = req.body
    let productCreated = await productModel.create(data1)
    res.send({data: productCreated})
}

const createuser = async function (req,res){
     let data2 = req.body
    let userCreated = await userModel.create(data2)
    res.send({data: userCreated})
    }

const createorder = async function (req,res){
    let data3 = req.body
    let orderCreated = await Ordermodel.create(data3)
    res.send({data: orderCreated})
}

module.exports.createuser=createuser
module.exports.createproduct=createproduct
module.exports.createorder=createorder


















// const createuser= async function (req, res) {
    //     let data = req.body
    //     let authorId = data.dauthor_id
    //     if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})
    
    //     let savedData= await authorModel.create(data)
    //     res.send({data: savedData})
    // }