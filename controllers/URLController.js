
var { nanoid } = require("nanoid");
const URL = require("../models/URL")
const generateURL = async(req,res)=>{
    console.log("res",req.body)
    const {url} = req.body;
    try{
        if(!url){
            return res.status(400).json({status:false,message:"URL is required"})
        }
        else{
            const shortID = nanoid(9);
            let data =  await URL.create({
                 shortID:shortID,
                 redirectURL:url,
             })
             console.log("data",data)
             if(data){
                let shortendURL = `http://localhost:8000/${data?.shortID}`
                res.status(200).json({status:true,message:"Url Shortened Successfully", data:shortendURL})
             }
        }
    }
    catch(error){
        res.status(500).json({status:false,message:"Internal server Error"})
    }
    

}
const getURLData = async(req,res)=>{
const {shortID}=req.params;
try{
if(!shortID)
return res.status(400).json("Something went wrong")
else{
    let data = await URL.findOne({shortID:shortID})
    console.log(data.redirectURL)
    res.redirect(data.redirectURL)
}
}
catch(error){
    console.log("Error",error)
    res.status(500).json({status:false,message:"Internal Server Error"})
}
}
module.exports={generateURL,getURLData}