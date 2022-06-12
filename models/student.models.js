const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name : {type:String},
    email : {type :String},
    age: {type: Number},
});

module.exports = mongoose.model("Student",StudentSchema);