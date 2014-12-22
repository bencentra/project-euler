var _ = require("underscore");

function sumOfSquares(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += (i * i);
    }
    return sum;
}

function squareOfSums(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return (sum * sum);
}

console.log(squareOfSums(100) - sumOfSquares(100));
