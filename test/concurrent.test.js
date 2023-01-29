"use strict";

var _async = require("../src/async.js");
test.concurrent("concurrent 1", async () => {
  await expect((0, _async.sayHelloAsync)("Eki")).resolves.toBe("Hello Eki");
});
test.concurrent("concurrent 2", async () => {
  await expect((0, _async.sayHelloAsync)("Eki")).resolves.toBe("Hello Eki");
});
test.concurrent("concurrent 3", async () => {
  await expect((0, _async.sayHelloAsync)("Eki")).resolves.toBe("Hello Eki");
});