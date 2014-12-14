var _ = require("underscore");

var sum = 0;
var cur = 0;
var count = 1;
var counting = true;

function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
}

while (counting) {
  cur = fib(count);
  if (cur > 4000000)
    break;
  if (cur % 2 == 0) 
    sum += cur;
  count++;
}

console.log(sum);