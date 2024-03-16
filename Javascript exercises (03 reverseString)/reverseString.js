const reverseString = function(string) {
    let arrayString = string.split("")
    let reverseArray = arrayString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray

};

// Do not edit below this line
module.exports = reverseString;
