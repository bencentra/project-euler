var common = require("../common");

function primeFactors(n) {
  var factors = [];
  for (var i = 3; i <= n; i++) {
    if (common.isPrime(i)) {
      if (n % i == 0) {
        console.log(i);
        factors.push(i);
      }
    }
  }
  return factors;
}

// Let it run; when it hangs, you probably have your answer!
var pfs = primeFactors(600851475143);
console.log(pfs);