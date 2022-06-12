const { getStudents, createStudent, getStudent,deleteStudent,updateStudent } = require("../controllers/student.controllers");

const router = require ("express").Router();
router.get("/",getStudents);
router.get("/:studentId",getStudent);
router.post("/",createStudent);
router.delete("/",deleteStudent);
router.put("/",updateStudent);

module.exports=router;