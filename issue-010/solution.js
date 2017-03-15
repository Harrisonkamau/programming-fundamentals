function evenOdd(a) {
    var sum = 0;
    a.reduce(function(x, y) {
        if (y % 2 === 0) {
            // since the beginning accumulator (x)
            // will be 0
            sum += y;
        } else {
            // subtract from the total
            sum -= y;
        }
    }, 0);
    return sum;
}