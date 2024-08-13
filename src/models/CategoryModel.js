const { DataTypes } = require("sequelize");
const sequelize = require("../../database/conection");

const Category = sequelize.define("categories", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: false }).then(() => {});

class CategoryRules {
  constructor(body) {
    this.body = body;
    this.erros = [];
    this.category = null;
  } 
  async create() {
    try{    
        this.category = await Category.create(this.body); 
        
    }catch(e) {
        throw new Error(e); 
    }
  }; 
  async delete (id) {
    try{    
        this.category = await Category.destroy({where:{id:id}}); 
    }catch(e) {
        throw new Error(e); 
    }
  }
}
 exports.CategoryRules  = CategoryRules;  
 exports.Category =Category; 