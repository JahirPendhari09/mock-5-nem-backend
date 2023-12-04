const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:String,
	email : String,
	phone : String,
	label : String,
	booked_slots : Array
}, {versionKey:false})

const userModal = mongoose.model("user",userSchema);

module.exports ={userModal}