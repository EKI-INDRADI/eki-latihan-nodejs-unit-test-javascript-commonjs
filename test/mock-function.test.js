

var _sum = require("../src/sum.js");
test("test calculate", () => {
  const callback = jest.fn();
  (0, _sum.calculate)([10, 10, 10], callback);
  (0, _sum.calculate)([10, 10, 10, 10, 10], callback);
  expect(callback.mock.calls.length).toBe(2);
  console.info(callback.mock.calls);
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(50);
});
test("test calculate without mock function", () => {
  const logging = total => {
    console.info(total);
  };
  (0, _sum.calculate)([10, 10, 10], logging);
  (0, _sum.calculate)([10, 10, 10, 10, 10], logging);
});
test("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40);
  callback.mockReturnValueOnce(80);
  expect((0, _sum.calculateAndReturn)([10, 10, 10], callback)).toBe(40);
  expect((0, _sum.calculateAndReturn)([10, 10, 10], callback)).toBe(80);
  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});
test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation(total => {
    return total * 2;
  });
  expect((0, _sum.calculateAndReturn)([10, 10, 10], callback)).toBe(60);
  expect((0, _sum.calculateAndReturn)([10, 10, 10, 10, 10], callback)).toBe(100);
  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(100);
});