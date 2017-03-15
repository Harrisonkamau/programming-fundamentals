function product(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        throw Error('NaN Exception');
    }
}