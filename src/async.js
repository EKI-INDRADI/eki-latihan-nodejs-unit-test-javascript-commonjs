"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHelloAsync = exports.getBalance = void 0;
const sayHelloAsync = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello ${name}`);
      } else {
        reject("Name is empty");
      }
    }, 1000);
  });
};
exports.sayHelloAsync = sayHelloAsync;
const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance
  };
};
exports.getBalance = getBalance;