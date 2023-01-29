"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHello = void 0;
const sayHello = name => {
  if (name) {
    return `Hello ${name}`;
  } else {
    throw new Error("Name is required");
  }
};
exports.sayHello = sayHello;