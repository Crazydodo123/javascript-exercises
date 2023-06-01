const sumAll = function(start, end) {

    // Verifying variable types
    let goodVars = true
    let array = new Array(start, end)

    array.forEach(ele => {
        if (typeof ele != "number" || ele < 0) goodVars = false;
    });

    if (goodVars === false) return "ERROR"


    if (start > end) [start, end] = [end, start]; // Placing the smallest number first

    sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
