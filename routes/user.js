const express=require("express");
const wrapAsync = require("../utils/wrapAsync");
const User=require("../Models/user");
const passport = require("passport");
const router=express.Router();
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/users.js");
//signUp
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));


//Login
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true,}),
userController.login
),
//logout
router.get("/logout",userController.logout);


module.exports=router;