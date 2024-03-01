const express = require("express")
const router = express.Router()
const URLController =  require("../controllers/URLController")

router.post("/url-shortner",URLController.generateURL);

module.exports = router;