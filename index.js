const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const fileupload = require("express-fileupload")
const fs = require("fs")
require("dotenv").config()
app.use(express.static("public"))
app.use(fileupload())
app.use(bodyParser.json())

global.filesDir = function(){
	var url = process.env.DIRECTORY;
    return url;
}

app.get("", (req,res) => {
    res.send("test images grabber")
})

app.get("/:folder/:prdfilename", (req,res) => {
    const path = filesDir()+"/"+req.params.folder+"/"+req.params.prdfilename
        if(fs.existsSync(path)){
            var image = fs.readFileSync(path)
            res.send(image)
        }else{
            // var image = fs.readFileSync(filesDir()+"/assets/errimage.png")
            res.send(path)
        }
})

app.listen(process.env.PORT, (err,res) => {
    console.log("imagegrabber")
})