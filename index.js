const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const route = require("./routes/routes")
const dotenv = require("dotenv").config();
const URLController = require("./controllers/URLController")

let port = 8000;

mongoose.connect(process.env.DB_URI || "mongodb+srv://vertika1996maurya:226017@cluster0.a53hmac.mongodb.net/booking_data")
let dbConnection = mongoose.connection;
dbConnection.once('open',()=>{
    console.log("Connected to:",dbConnection.db.databaseName)
})
app.use(cors())
app.use(bodyParser.json())
app.use("/api",route)
app.get("/:shortID",URLController.getURLData)

app.listen(port , ()=>{
    console.log(`Connected to port ${port}`)
})
