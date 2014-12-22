var _ = require("underscore");

// http://en.wikipedia.org/wiki/Primality_test
function isPrime(n) {
  if (n <= 3) {
    return n > 1;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
 
var nthPrime = 2;
var n = 3;
while (nthPrime < 10001) {
    n += 2;
    if (isPrime(n)) {
        nthPrime++;
    }
}
console.log(n);
