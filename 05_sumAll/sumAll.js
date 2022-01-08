const sumAll = function(start, end) {
    if(start > end) {
        [start, end] = [end, start];
    }

    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') return 'ERROR';

    const n = start - 1;
    const finalValue = (end - n) * (end + start) / 2;
    return finalValue;
};

// Do not edit below this line
module.exports = sumAll;
