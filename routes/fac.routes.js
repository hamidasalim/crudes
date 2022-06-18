const { getFacs, createFac, getFac,deleteFac,updateFac } = require("../controllers/fac.controllers");

const router = require ("express").Router();
router.get("/",getFacs);
router.get("/:facId",getFac);
router.post("/",createFac);
router.delete("/",deleteFac);
router.put("/",updateFac);

module.exports=router;