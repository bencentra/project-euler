var common = require("../common");

var sum = 0;
var cur = 0;
var count = 1;
var counting = true;

while (counting) {
  cur = common.fib(count);
  if (cur > 4000000)
    break;
  if (cur % 2 == 0) 
    sum += cur;
  count++;
}

console.log(sum);