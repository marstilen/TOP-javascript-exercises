const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replaceAll(" ", "")
    word = word.replace(/[^a-zA-Z0-9\s]/g, '');
    let wordBackwards = [];
    let i = word.length - 1; 
    while(i >= 0){
        wordBackwards.push(word[i]);
        i--;
 }
    return wordBackwards.join("") == word;
};

// Do not edit below this line
module.exports = palindromes;
