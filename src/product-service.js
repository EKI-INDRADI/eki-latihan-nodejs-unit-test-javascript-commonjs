


var _database = require("./database.js");
class ProductService {
  static findById(id) {
    return (0, _database.getProductById)(id);
  }
  static findAll() {
    return (0, _database.getAllProducts)();
  }
}
exports.ProductService = ProductService;