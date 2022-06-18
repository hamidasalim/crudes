//import section
const express = require("express");
const dot = express();
const mongoose = require("mongoose"); 
//db conn
mongoose.connect('mongodb+srv://hamidas:0501xwf0@faccrudes.crdix.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on("connected", ()=> {
    console.log("ure conn");
})
mongoose.connection.on("error",(err)=>{
    console.log("not con");
})

//import routes
const facRoutes = require("./routes/fac.routes");

//middleware
dot.use(express.json());
dot.use(express.urlencoded({extended: false}));

//routes middleware
dot.use("/fac",facRoutes);
//server listening
const port=8000;
dot.listen(port,() => {
    console.log(`Example app on port: 8000 `);
});