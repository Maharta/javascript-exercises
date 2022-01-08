const repeatString = function(string, num) {
    if(num === 0) return '';
    if(num < 0) return 'ERROR';

    let initialString = string;
    for(let i = 1; i<num; i ++){
        string += initialString; 
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
