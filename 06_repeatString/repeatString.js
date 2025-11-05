const repeatString = function(userInput, repeats) {
    if(repeats < 0){return "ERROR"}
    let repeatedWord = "";
    for (let i = 0; i < repeats; i++) {
        repeatedWord += userInput;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
