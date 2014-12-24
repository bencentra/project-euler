var common = {
  // http://stackoverflow.com/questions/494594/how-to-write-the-fibonacci-sequence-in-python
  fib: function(n) {
      if (n < 2) {
        return n;
      }
      return this.fib(n - 1) + this.fib(n - 2);
  },
  // http://en.wikipedia.org/wiki/Primality_test
  isPrime: function(n) {
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
  },
  reverseString: function(s) {
    return s.split("").reverse().join("");
  },
  isPalindrome: function(n) {
    var str = n + "";
    if (str === this.reverseString(str)) {
        return true;
    }
  }
}

module.exports = common;