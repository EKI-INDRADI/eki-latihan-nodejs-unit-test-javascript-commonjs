"use strict";

var _sum = require("../src/sum.js");

const table = [
    [
        [],
        0
    ],
    [
        [10],
        10
    ],
    [
        [10, 10, 10],
        30
    ],
    [
        [10, 10, 10, 10, 10],
        50
    ],
    [
        [10, 10, 10, 10, 10, 10, 10],
        70
    ]
];

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
    expect((0, _sum.sumAll)(numbers)).toBe(expected);
  });