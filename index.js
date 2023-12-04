const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const { userRoutes } = require("./routes/users.route");
const app = express();

app.use(express());
app.use(cors())
app.use(express.json());

app.use("/users",userRoutes);

app.get("/",(req,res)=>{
    res.status(200).send("users Home page")
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