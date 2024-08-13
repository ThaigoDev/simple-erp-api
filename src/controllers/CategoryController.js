const {CategoryRules}  = require("../models/CategoryModel");
class CategoryController {
  static async create(req, res) {
    try {
      const categoryBR = new CategoryRules(req.body);
      await categoryBR.create();
      if (categoryBR.erros.length > 0) {
        res.status(400).json({
          title: "ERROR",
          data: categoryBR.body,
          status: 400,
          error: categoryBR.erros,
        });
      }
      res.status(200).json({
        title: "Category created!",
        data: categoryBR.body,
        status: 200,
      });
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    }
  }
  static async delete(req,res) {
    try {
      const categoryBR = new CategoryRules(req.body);
      await categoryBR.delete(req.params.id);
      if (categoryBR.erros.length > 0) {
        res.status(400).json({
          title: "ERROR",
          data: categoryBR.body,
          status: 400,
          error: categoryBR.erros,
        });
      }
      res.status(200).json({
        title: "Category Deleted!",
        data: categoryBR.body,
        status: 200,
      });
    } catch (e) {
      res.status(502).json({
        status: "failed",
        error: console.error(e),
      });
    }
  }
}

module.exports = CategoryController;
