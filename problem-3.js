var _ = require("underscore");

function primeFactors(n) {
  var factors = [];
  for (var i = 2; i <= n; i++) {
    if (isPrime(i))
      if (n % i == 0) 
        factors.push(i);
  }
  return factors;
}

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

var pfs = primeFactors(600851475143);
console.log(pfs);