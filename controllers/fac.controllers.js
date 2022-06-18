const facModels = require("../models/fac.models")

const createFac = async (req,res) =>{
    const newFac = new facModels({
        name: req.body.name,
        email: req.body.email,
        specialities: req.body.specialities,
        location:req.body.location,
        classes:req.body.classes,
    });
    try{
        const savedFac = await newFac.save();
        return res.status(200).json(savedFac);

    }catch(error){
        return res.status(500).json(error);
    }
};
const getFacs = async (req,res)=>  {
    try{
        const facs = await facModels.find();
        return res.status(200).json(facs);
    }catch(error){
        return res.status(500).json(error);
    }
};
const getFac = async (req,res)=>  {
    const id = req.params.facId;
    try{
        const fac = await facModels.findById(id);
        return res.status(200).json(fac);
    }catch(error){
        return res.status(500).json(error);
    }
};

const deleteFac = async (req,res)=>  {
    const id = req.params.facId;
    try{
        const fac = await facModels.findByIdAndDelete(id);
        return res.status(200).json(fac);
    }catch(error){
        return res.status(500).json(error);
    }
};

const updateFac = async (req,res)=>  {
    const id = req.params.facId;
    try{
        const fac = await facModels.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        return res.status(200).json(fac);
    }catch(error){
        return res.status(500).json(error);
    }
};

module.exports.createFac = createFac;
module.exports.getFacs = getFacs;
module.exports.getFac = getFac;
module.exports.deleteFac = deleteFac;
module.exports.updateFac = updateFac;