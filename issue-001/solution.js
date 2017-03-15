function dataTypeCheck(a) {
    if (typeof a === 'number') {
        // are numbers, either NaN, int or float
        if (isNaN(a)) {
            return 0;
        } else if (a % 1 === 0) {
            // integer
            return a / 2;
        } else {
            // float
            return a * 2;
        }
    } else if (typeof a === 'string') {
        // check if it can be typecast
        if (!isNaN(parseInt(a))) {
            // check if it's float or integer
            if (a.indexOf('.') != -1) {
                // it's float
                return parseFloat(a);
            }
            // else, int
            return parseInt(a, 10);
        } else {
            // any other string
            return 'hello ' + a;
        }
    } else if (a === null || a === undefined) {
        return 0;
    }
}