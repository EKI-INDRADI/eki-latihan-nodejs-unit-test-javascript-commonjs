"use strict";

var _sum = require("../src/sum.js");
test("test sum function 1", () => {
  // Closures "=>"   == callback

  const result = (0, _sum.sum)(1, 2);
  expect(result).toBe(3); // hasil yang di harapkan
});

test("test sum function 2", () => {
  const result = (0, _sum.sum)(1, 2);
  expect(result).toBe(3);
});
test("test sum function 3", () => {
  const result = (0, _sum.sum)(1, 2);
  expect(result).toBe(3);
});
test("test sum all", () => {
  const numbers = [1, 1, 1, 1, 1];
  expect((0, _sum.sumAll)(numbers)).toBe(5);
});