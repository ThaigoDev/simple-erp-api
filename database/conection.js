const {Sequelize} = require("sequelize"); 

const sequelize = new Sequelize("ERPSQL","root","th@331400",{
    host: 'localhost', 
    dialect:'mysql', 
}) 

module.exports   = sequelize; 