const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash');
const { status } = require('express/lib/response');
const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!') 
});

router.get('/hello', function (req, res) {
    let months = lodash.chunk(['January','February','march','aprail','may','june','july','august','september','octobar','november','december'],3)
    console.log(months)
    let oddnumbers = [1,3,5,7,9,11,13,15,17,19];
    oddnumberstail = lodash.tail(oddnumbers)
    console.log(oddnumberstail)
    let dublicatenumber = lodash.union([11,22,55,66,44,11,22,55,99]);
    console.log(dublicatenumber)
    let pairs = [
        ['horror', 'the shinning'], 
        ['drama', 'titanic'], 
        ['thriller', 'shutter'],
        ['fantasy','pans Labyrinth'],
    ]
    let obj = lodash.fromPairs(pairs);
    console.log(obj)
    res.send('Hello there!')
});

router.get('/movies', function(req, res){
    let moviesarr = ['KGF','Bajrangi bhaijaan','bahubali','dangal' ]
    let movieslist = JSON.stringify(moviesarr);
    res.send(movieslist)
})

router.get('/movies/:indexnumber', function(req, res){
    let moviesarr1 = ['KGF','Bajrangi bhaijaan','bahubali','dangal' ]
    for (var i=0;i<moviesarr1.length;i++) {
        let indexnumber = moviesarr1[i]
      }
    // console.log('The requested movie index is '+ JSON.stringify(req.params))
    // console.log('The movie name is '+req.params.indexnumber)
    res.send(indexnumber)
})


router.get('/films', function(req, res){

    let film =
    [ {
     id    : 1,
     name  : "The Shining"
    }, 
        {
      id   : 2,
     name  : "Incendies"
    }, 
        {
     id    : 3,
     name  : "Rang de Basanti"
    }, 
       {
     id    : 4,
     name  : "Finding Nemo"
    }]
let filmarr = JSON.stringify(film);
   res.send(filmarr)
})

router.get('/films/:filmid', function(req, res){
    let film2 =
    [ {
     id    : 1,
     name  : "The Shining"
    }, 
        {
      id   : 2,
     name  : "Incendies"
    }, 
        {
     id    : 3,
     name  : "Rang de Basanti"
    }, 
       {
     id    : 4,
     name  : "Finding Nemo"
    }]
    let filmid = req.params.
    res.send(film2)
})



router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/sol1', function (req, res){
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let lastDigit= arr.pop()
   let consecutiveSum= lastDigit * (lastDigit+1) / 2
   let missingNumber= consecutiveSum - total
 
   res.send(  { data: missingNumber  }  );
 });

router.get('/sol2', function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
   let len= arr.length
 
   let total = 0;
   for (var i in arr) {
       total += arr[i];
   }
 
   let firstDigit= arr[0]
   let lastDigit= arr.pop()
   let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
   let missingNumber= consecutiveSum - total
  
   res.send(  { data: missingNumber  }  );
 });

 let players =
 [
     {
         "name": "manish",
         "dob": "1/1/1995",
         "gender": "male",
         "city": "jalandhar",
         "sports": [
             "swimming"
         ]
     },
     {
         "name": "gopal",
         "dob": "1/09/1995",
         "gender": "male",
         "city": "delhi",
         "sports": [
             "soccer"
         ],
     },
     {
         "name": "lokesh",
         "dob": "1/1/1990",
         "gender": "male",
         "city": "mumbai",
         "sports": [
             "soccer"
         ],
     },
 ]

 router.post('/players', function (req, res) {

     //LOGIC WILL COME HERE
     let ele = req.body
     let newplayers = players.concat(ele)
     if (players.name === req.body.name){
     res.send(  { data: newplayers , status: true }  )
 }else{
     res.send('Players name already exist', {status: false})
 }

})


module.exports = router;
// adding this comment for no reason