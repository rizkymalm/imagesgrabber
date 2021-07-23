const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const fileupload = require("express-fileupload")
require("dotenv").config()
app.use(express.static("public"))
app.use(fileupload())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

global.filesDir = function(){
	var url = process.env.DIRECTORY;
    return url;
}

app.get("", (req,res) => {
    res.send("test images grabber")
})

app.listen(process.env.PORT, (err,res) => {
    console.log("imagegrabber")
})