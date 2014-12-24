var common = require("../common");

var sum = 2;
var i = 3;
while (i < 2000000) {
  if (common.isPrime(i)) {
    sum += i;
  }
  i += 2;
}
console.log(sum);