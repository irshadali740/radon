const d = function(){
let text = "     functionUp     ";
let result = text.trim()
console.log(result)
}

const e = function(){
let text1 = "HOW ARE YOU";
let result1 = text1.toLowerCase()
console.log(result1)
}

const f = function(){
let text2 = "i am fine";
let result2 = text2.toUpperCase()
console.log(result2)
}

module.exports.first = d
module.exports.second = e
module.exports.third = f