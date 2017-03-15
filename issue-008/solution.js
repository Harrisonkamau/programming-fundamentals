function sum() {
    var sum = 0;
    Array.from(arguments) // borrowed from Mirriam (@Chanya-M)
        .forEach(function(number) {
            sum += number;
        });
    return sum;
}