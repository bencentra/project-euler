var i = 19;
var found = false;
var num = false;
while (!num) {
    found = true;
    for (var j = 1; j <= 20; j++) {
        if (i % j != 0) {
            found = false;
            break;
        }
    }
    if (found) {
        num = i;
    }
    else {
        i += 19;
    }
}
console.log(num);