//import section
const express = require("express");
const dot = express();
const mongoose = require("mongoose"); 
//db conn
mongoose.connect('mongodb+srv://hamidas:0501xwf0@hamidas.pvngg.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", ()=> {
    console.log("ure conn");
})
mongoose.connection.on("error",(err)=>{
    console.log("not con");
})

//import routes
const studentRoutes = require("./routes/student.routes");

//middleware
dot.use(express.json());
dot.use(express.urlencoded({extended: false}));

//routes middleware
dot.use("/students",studentRoutes);






/*

dot.get("/",(req,res) => {
    res.send("Hello there");
}
);

dot.get("/name",(req,res) => {
    res.send("Hamida Salim");
}
);

dot.get("/Adress",(req,res) => {
    res.send("Im scraed stay away");
}
);

dot.get("/Age",(req,res) => {
    res.send("im 22 years old");
}
);

dot.get("/Statut",(req,res) => {
    res.send("Single ;) ;) ");
}
);
                      
dot.get("/Profession",(req,res) => {
    res.send("Student");
}
);

dot.post('/sum', (req,res)=>{
res.send(`${req.body.a} + ${req.body.b} = ${req.body.a + req.body.b}`);
});
dot.post('/min', (req,res)=>{
res.send(`${req.body.a} - ${req.body.b} = ${req.body.a - req.body.b}`);
});
dot.post('/mult', (req,res)=>{
res.send(`${req.body.a} * ${req.body.b} = ${req.body.a * req.body.b}`);
});
dot.post('/div', (req,res)=>{
try{
res.send(`${req.body.a} / ${req.body.b} = ${req.body.a / req.body.b}`);
}
catch(error){
res.send("cannot divide by 0");
}
});*/

//server listening
const port=8000;
dot.listen(port,() => {
    console.log(`Example app on port:8000`);
});