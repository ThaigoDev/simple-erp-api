const { DataTypes, where } = require("sequelize");
const sequelize = require("../../database/conection");

const Accounts = sequelize.define("accounts", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirmedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync({ force: false }).then(() => {});

class AccountsRules {
  constructor(body) {
    this.body = body;
    this.erros = [];
    this.account = null;
  }
  async create() {
    try {
      const findedEmail = await this.findByEmail();
      if (findedEmail) {
        this.erros.push("An account with this email already exists!");
      } else {
        this.account = Accounts.create(this.body);
      }
    } catch (e) {
      throw new Error(e);
    }
  }
  async findByEmail() {
    try {
      const account = Accounts.findOne({ where: { email: this.body.email } });
      return account;
    } catch (e) {
      throw new Error(e);
    }
  }
  async login() {
    try { 
        const findedEmail = await this.findByEmail(); 
        if(!findedEmail) {
            this.erros.push("There is NO account with that email");
        }else {
            if(findedEmail.password !== this.body.password) {
                this.erros.push("incorrect password");
            }
        }
    } catch (e) {
      throw new Error(e);
    }
  } 
  async getAll() {
    try {
      const users = await  Accounts.findAll();  
      return users; 
    }catch(e) {
      throw new Error(e); 
    }
  } 
  async delete(id) {
    try {
      this.account = await  Accounts.destroy({where:{id:id}});  
    }catch(e)  {
      throw new Error(e); 
    }
  } 
  async update(id) {
    try {
      this.account = await Accounts.update(this.body,{where: {id:id}}); 
    }catch(e) {
      throw new Error(e); 
    }
  }
}

module.exports = AccountsRules;
