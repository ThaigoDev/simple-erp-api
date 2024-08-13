const express = require("express"); 
const app = express();   
const path = require("path");  
const router = require("./routes");  
require("dotenv").config(); 
const sequelize = require("./database/conection"); 
app.set("view engine", "ejs"); 
app.set("views", path.resolve(__dirname,"src","views") );  
app.use(express.urlencoded({extended:true})); 
app.use(express.static("public"));  
app.use(express.json());

app.use(router); 
sequelize.authenticate().then(()=>{
    console.log("Conecting..."); 
    app.emit("Conected!"); 
}) 
app.on("Conected!",()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Acess: http://localhost:3000/ ")
    }
)
})