const sequelize = require("../../database/conection");
const { DataTypes } = require("sequelize");
const { Category } = require("../models/CategoryModel");
const Product = sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category:{
    ype: DataTypes.STRING,
    allowNull: false,
  }, 
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  un: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  minInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  constPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Category.hasMany(Product);
Product.belongsTo(Category); // 1 para 1 utilizamos o belongsTo = pertecence a
sequelize.sync({ force: false }).then(() => {}); 

class ProductRules {
    constructor(body) {
        this.body = body; 
        this.erros = []; 
        this.product = null; 
        } 

    async create() {
        try{
        this.product = await Product.create(this.body); 
        }catch(e) {
            throw new Error(e); 
        }
    };   
    async read() {

    }
    async update() {

    } 
    async delete(){

    }; 
    
    
} 
exports.ProductRules = ProductRules; 
exports.Product =Product; 
