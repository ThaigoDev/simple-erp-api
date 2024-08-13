const { ProductRules } = require("../models/ProductModel");
class ProductController {
  static async create(req, res) {
    try {
      const productBR = new ProductRules(req.body);
      await productBR.create();
      if (productBR.erros.length > 0) {
        res.status(400).json({
          title: "ERROR",
          data: productBR.body,
          status: 400,
          error: productBR.erros,
        });
      }
      res.status(200).json({
        title: "Product created!",
        data: productBR.body,
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
 
module.exports =ProductController