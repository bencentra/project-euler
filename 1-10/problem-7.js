var common = require("../common");
 
var nthPrime = 2;
var n = 3;
while (nthPrime < 10001) {
    n += 2;
    if (common.isPrime(n)) {
        nthPrime++;
    }
}
console.log(n);