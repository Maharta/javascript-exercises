const reverseString = function(str) {
    const stringArray = str.split("");
    stringArray.reverse();
    return stringArray.join("");
    

};

console.log(reverseString('Aku adalah Kapiten'));

// Do not edit below this line
module.exports = reverseString;
