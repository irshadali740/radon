const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../midddleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", middleware.authentification, middleware.autherisation, userController.getUserData)

router.put("/users/:userId",middleware.authentification,middleware.autherisation,userController.updateUser)

router.get("/deleteuser/:userId",middleware.authentification,middleware.autherisation,userController.deleteduser)

module.exports = router;