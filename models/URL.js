const mongoose = require("mongoose")
const urlSchema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,

    }
},
{ timestamps:true
})

const URL = mongoose.model("url",urlSchema)
module.exports = URL