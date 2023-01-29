"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductService = void 0;
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