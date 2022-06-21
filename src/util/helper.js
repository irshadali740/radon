const printDate = function() {
    let currentDate = new Date()
    console.log(currentDate)    
}

const printMonth = function() {
    let currentdate = new Date()
    let currentMonth = currentdate.getMonth() + 1
    console.log('The current month is '+currentMonth)
}

const getBatchInfo = function() {
  let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
  console.log(batchInformation)
}

kajashxshgasccfcjasasgasj

// const getMissingNo = function (a)
// {
//     let n = a.length;
//     let i, total=1;
     
//     for (i = 2; i<= (n+1); i++)
//     {
//         total += i;
//         total -= a[i-2];
//     }
//     return total;
// }

// let arr= [1,2,3,5,6,7];
//     let missingNumber = getMissingNo(arr);
//     console.log(missingNumber)

// module.exports.missingnumber = getMissingNo


module.exports.printDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.getCohortData = getBatchInfo
