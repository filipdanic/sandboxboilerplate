'use strict';

var _galago = require('galago');

var range = function range(len) {
  return Array.apply(null, Array(len)).map(function (_, i) {
    return i;
  });
};

var multiply = function multiply(a) {
  return function (b) {
    return a * b;
  };
};

var multiplyListMembers = function multiplyListMembers(val) {
  return function (list) {
    return list.map(multiply(val));
  };
};

var list = (0, _galago.compose)(10, [range, multiplyListMembers(10)]);
console.log(' => ', list); //  => [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90 ]