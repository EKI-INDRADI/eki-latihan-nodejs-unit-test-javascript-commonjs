

var _productService = require("../src/product-service.js");
var _database = require("../src/database.js");
jest.mock("../src/database.js");
test("mock modules getProductById", () => {
  _database.getProductById.mockImplementation(id => {
    return {
      id: id,
      name: "Product Mock"
    };
  });
  const product = _productService.ProductService.findById(1);
  expect(product).toEqual({
    id: 1,
    name: "Product Mock"
  });
});
test("mock modules getAllProducts", () => {
  const products = [{
    id: 1,
    name: "Product Mock"
  }, {
    id: 2,
    name: "Product Mock"
  }];
  _database.getAllProducts.mockImplementation(() => {
    return products;
  });
  expect(_productService.ProductService.findAll()).toEqual(products);
});