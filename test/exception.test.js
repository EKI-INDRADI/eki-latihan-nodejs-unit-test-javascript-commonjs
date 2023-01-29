"use strict";

var _exception = require("../src/exception.js");
test("exception", () => {
  expect(() => (0, _exception.callMe)("eki")).toThrow();
  expect(() => (0, _exception.callMe)("eki")).toThrow(_exception.MyException);
  expect(() => (0, _exception.callMe)("eki")).toThrow("Ups my exceptions happens");
});
test("exception not happens", () => {
  expect((0, _exception.callMe)("Budi")).toBe("OK");
});