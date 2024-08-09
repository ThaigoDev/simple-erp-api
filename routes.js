const express = require("express"); 
const router =  express.Router(); 
const HomeController = require("./src/controllers/HomeController"); 
router.get("/",HomeController.index) ;   
router.post("/register",HomeController.register); 
router.post("/login",HomeController.login); 
router.get("/users/all",HomeController.getAllUsers); 
router.get('/users/delete/:id',HomeController.delete) 
router.post('/users/update/:id',HomeController.update)
module.exports= router;