function superSum(a) {
    var sum = 0;
    a.forEach(function(number) {
        number
            .toString() // so we can split into each digit
            .split('') // convert to array so we can use the .forEach method
            .forEach(function(digit) {
                // convert back to integer so we can sum up
                sum += parseInt(digit, 10);
            });
    });
    return sum;
}