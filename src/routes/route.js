const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor  )

router.post("/createpublisher", bookController.createpublisher)

router.post("/Bookpublisherauthor", bookController.BookspublisherAuthor)

router.get("/allbookswithdetails",bookController.listpublisherandauthor)

router.put("/updateboolean", bookController.updateboolean)
module.exports = router;

// router.get("/getAuthorsData", authorController.getAuthorsData)