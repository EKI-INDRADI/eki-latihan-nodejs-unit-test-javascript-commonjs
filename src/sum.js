"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumAll = exports.sum = exports.calculateAndReturn = exports.calculate = void 0;
const sum = (first, second) => {
  return first + second;
};
exports.sum = sum;
const sumAll = numbers => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
};
exports.sumAll = sumAll;
const calculate = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  callback(total);
};
exports.calculate = calculate;
const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return callback(total);
};
exports.calculateAndReturn = calculateAndReturn;