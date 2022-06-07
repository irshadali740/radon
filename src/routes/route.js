const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookandAuthorController= require("../controllers/bookandAuthorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.get("/createBook", BookandAuthorController.createBook  )

router.get("/createauthor", BookandAuthorController.createauthor)

router.get("/chetanbhagatbooks", BookandAuthorController.bookbychetanBhagat)
 
router.get("/authoroftwostates", BookandAuthorController.authoroftwostates)

router.get("/bookbycost", BookandAuthorController.bookcost)




module.exports = router;

//MOMENT JS
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })
