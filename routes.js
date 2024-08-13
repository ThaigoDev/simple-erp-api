const express = require("express"); 
const router =  express.Router(); 
const HomeController = require("./src/controllers/HomeController");  
const CategoryController = require("./src/controllers/CategoryController"); 
const ProductController = require("./src/controllers/ProductController"); 
router.get("/",HomeController.index) ;   
router.post("/register",HomeController.register); 
router.post("/login",HomeController.login); 
router.get("/users/all",HomeController.getAllUsers); 
router.get('/users/delete/:id',HomeController.delete) 
router.post('/users/update/:id',HomeController.update); 
router.post("/category/new",CategoryController.create);  
router.delete("/category/delete/:id",CategoryController.delete);   
router.post("/product/new",ProductController.create)

module.exports= router;