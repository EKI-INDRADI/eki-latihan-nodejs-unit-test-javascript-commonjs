

var _database = require("../src/database.js");
var _productService = require("../src/product-service.js");
jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");
    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    };
});
test.failing("mock modules getProductById", () => {
    _productService.ProductService.findById(1);
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