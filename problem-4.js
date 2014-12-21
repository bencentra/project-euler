var _ = require("underscore");

function reverseString(s) {
    return s.split("").reverse().join("");
}

function isPalindrome(n) {
    var str = n + "";
    if (str === reverseString(str)) {
        return true;
    }
}

var largest = 0;
for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        var product = i * j;
        if (isPalindrome(product)) {
            if (product > largest) {
                largest = product;
            }
        }
    }
}
console.log("LARGEST: " + largest);
