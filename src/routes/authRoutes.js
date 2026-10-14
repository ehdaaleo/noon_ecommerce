const express =require ("express");
const router= express.Router();
const {
    register, login , getProfile 
}=require("../controllers/auth.controller.js");
const { protect } =require ("../middleware/authMiddleware.js");
router.post("/register",register);
router.post("/login",login);
router.get("/profile",protect,getProfile);
module.exports=router;
