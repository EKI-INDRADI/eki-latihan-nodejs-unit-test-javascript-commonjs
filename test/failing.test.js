"use strict";

var _sayHello = require("../src/sayHello.js");
test("sayHello success", () => {
  expect((0, _sayHello.sayHello)("Eki")).toBe("Hello Eki");
});
test.failing("sayHello error", () => {
  (0, _sayHello.sayHello)(null);
});
test("sayHello error matchers", () => {
  expect(() => (0, _sayHello.sayHello)(null)).toThrow();
});