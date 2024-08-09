const AccountsRules = require("../models/AccountsModels");

class HomeController {
  static index(req, res) {
    try {
      res.status(200).json({
        title: "Welcome of Thaigo API",
        status: "success",
      });
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: e.menssage,
      });
    }
  }
  static async register(req, res) {
    try {
      const accountRules = new AccountsRules(req.body);
      await accountRules.create();
      if (accountRules.erros.length > 0) {
        res.status(400).json({
          title: "ERROR",
          data: accountRules.body,
          status: 400,
          error: accountRules.erros,
        });
      } else {
        res.status(200).json({
          title: "Account created!",
          data: accountRules.body,
          status: 200,
        });
      }
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    }
  }
  static async login(req, res) {
    try {
      const accountRules = new AccountsRules(req.body);
      await accountRules.login();
      if (accountRules.erros.length > 0) {
        res.status(400).json({
          title: "ERROR",
          data: accountRules.body,
          status: 400,
          error: accountRules.erros,
        });
      } else {
        res.status(200).json({
          title: "Authorized login",
          data: accountRules.body,
          status: 200,
        });
      }
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    }
  }
  static async getAllUsers(req, res) {
    try {
      const accountRules = new AccountsRules(req.body);
      const users = await accountRules.getAll();
      res.status(200).json({
        title: "Authorized login",
        data: users,
        status: 200,
      });
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    }
  }
  static async delete(req, res) {
    try {
      const accountRules = new AccountsRules(req.body);
      await accountRules.delete(req.params.id);
      res.status(200).json({
        title: "A record was deleted from the database",
        data: accountRules.account,
        status: 200,
      });
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    }
  } 
  static async update(req,res) {
    try {
      const accountRules = new AccountsRules(req.body); 
      await  accountRules.update(req.params.id);  
      res.status(200).json({
        title: "A record was Edited from the database",
        data: accountRules.account,
        status: 200,
      });
    }catch(e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    } 
   }
}
module.exports = HomeController;
