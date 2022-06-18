const mongoose = require("mongoose");

const FacSchema = new mongoose.Schema({
    name : {type:String},
    email : {type :String},
    specialities : {type : String},
    location : {type :String},
    classes : {type :String},
});

module.exports = mongoose.model("Fac",FacSchema);