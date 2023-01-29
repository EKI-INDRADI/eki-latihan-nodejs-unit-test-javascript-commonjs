

var _sum = require("../src/sum.js");
test("test mock matchers", () => {
  const callback = jest.fn();
  (0, _sum.calculate)([10, 10, 10], callback);
  (0, _sum.calculate)([10, 10, 10, 10, 10], callback);
  expect(callback).toHaveBeenCalled();
  expect(callback).toHaveBeenCalledTimes(2);
  expect(callback).toHaveBeenCalledWith(30);
  expect(callback).toHaveBeenCalledWith(50);
});