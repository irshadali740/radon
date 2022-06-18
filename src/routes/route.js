const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getbydistrict", CowinController.getBydistrict)
router.get("/cowin/wheatheroflondon", CowinController.temperatureofLondon)
router.get("/cowin/getsortedofcities", CowinController.getsortedofcities)
router.post("/cowin/memehandler", CowinController.meme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;