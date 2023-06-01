const repeatString = function(message, times) {
    if (times < 0) return "ERROR";

    let ans = "";

    for (let i = 0; i < times; i++) {
        ans += message;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
