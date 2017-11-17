import { compose } from 'galago';

const range = (len) =>
  Array.apply(null, Array(len)).map((_, i) => i);

const multiply = (a) => (b) => a * b;

const multiplyListMembers = (val) => (list) => list.map(multiply(val));

const list = compose(10, [range, multiplyListMembers(10)]);
console.log(' => ', list); //  => [ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
