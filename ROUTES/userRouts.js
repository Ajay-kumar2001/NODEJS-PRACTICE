let {reg, User_login,}=require("../CONTROLLERS/registationAndLoginCon")
let express=require("express")
const Authentication = require("../MIDLEWARES/authentication")
const getUserCon = require("../CONTROLLERS/getUserCon")
let route=express.Router()
route.post("/register",reg)
route.post("/login",User_login)
route.get("/getAllUsers",getUserCon)

module.exports=route
