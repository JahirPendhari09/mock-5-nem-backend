const express = require("express");
const { connection } = require("./db");
const cors = require("cors")
const app = express();

app.use(express());
app.use(cors())
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("working")
})


app.listen(process.env.port, async()=>{
    try{
        await connection
        console.log("Mongodb atlas is connected ")
        console.log("Server is Conntected")
    }catch(err){
        console.log(err)
    }
})