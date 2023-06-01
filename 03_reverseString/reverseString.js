const reverseString = function(word) {
    let reversedChars = []
    
    for (let i = word.length - 1; i >= 0; i--) {
        reversedChars.push(word[i])
    }

    return reversedChars.join("")

};

// Do not edit below this line
module.exports = reverseString;
