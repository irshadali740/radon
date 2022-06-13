const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const mid1 = function(req, res, next){
    const data = req.headers.isfreeappuser
    if(!data){
        res.send({msg:"header is mandatory"})  
    }
    else{
        next()
       
    }
}
const mid2= function ( req, res, next) {
    let data = req.body.userId
    const check  =  userModel.find({_id : data})
    if (!check){
    res.send({msg: 'User Id Is Invalid' })}
else{
    let data2 = req.body.productId
    const check2  = productModel.find({_id : data2})
    if (!check2){
    res.send({msg: 'Product Id Is Invalid' })}
    else{next()}
}
}




// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.mid1= mid1
module.exports.mid2= mid2
// module.exports.mid4= mid4
