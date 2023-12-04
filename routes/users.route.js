const express = require("express");
const { userModal } = require("../model/user.modal");

const userRoutes = express.Router();

userRoutes.get("/", async(req,res)=>{
    const {name}=req.query;
    try{
        
        const users = await userModal.find();
        res.status(200).send({"msg":"Users Data..","data":users})

    }catch(err){
        res.status(500).send({"msg":err})
    }
})

userRoutes.post("/add", async(req,res)=>{
    const {name, email,phone,lable}= req.body;
    try{

        let newUser = new userModal({
            name,email,phone,lable,booked_slots:[]
        })
        await newUser.save()
        res.status(200).send({"msg":"New User has been added","newUser":req.body})

    }catch(err){
        res.status(500).send({"msg":err})
    }
})
userRoutes.patch("/update/:userId", async(req,res)=>{
    const {userId}= req.params;
    try{

        await userModal.findByIdAndUpdate({_id:userId},req.body);

        res.status(200).send({"msg":"The User has been Updates","newUser":req.body})

    }catch(err){
        res.status(500).send({"msg":err})
    }
})
userRoutes.delete("/delete/:userId", async(req,res)=>{
    const {userId}= req.params;
    try{
        await userModal.findByIdAndDelete({_id:userId});

        res.status(200).send({"msg":"The User has been Deleted"})

    }catch(err){
        res.status(500).send({"msg":err})
    }
})

module.exports ={userRoutes}