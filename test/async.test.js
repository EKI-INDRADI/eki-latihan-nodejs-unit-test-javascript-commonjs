"use strict";

var _async = require("../src/async.js");
test("test async function", async () => {
  const result = await (0, _async.sayHelloAsync)("Eki");
  expect(result).toBe("Hello Eki");
});
test("test async matchers", async () => {
  await expect((0, _async.sayHelloAsync)("Eki")).resolves.toBe("Hello Eki");
  await expect((0, _async.sayHelloAsync)()).rejects.toBe("Name is empty");
});