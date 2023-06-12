const palindromes = function (sentence) {
    const tested = "abcdefghijklmnopqrstuvwxyz1234567890"
    chars = []
    sentence = sentence.toLowerCase()

    for (const char of sentence) {
        if (tested.includes(char)) chars.push(char)
    }

    for (let i = 0; i < (chars.length / 2); i++) {

        if (chars[i] !== chars[chars.length - i - 1]) return false
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
