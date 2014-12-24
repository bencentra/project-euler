var common = require("../common");

var largest = 0;
for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        var product = i * j;
        if (common.isPalindrome(product)) {
            if (product > largest) {
                largest = product;
            }
        }
    }
}
console.log("LARGEST: " + largest);