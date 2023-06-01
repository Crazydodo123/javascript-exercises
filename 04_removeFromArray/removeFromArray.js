const removeFromArray = function(array, ...removed) {
    ans = []

    for (ele of array) {

        if (!removed.includes(ele)) ans.push(ele)
    }

    return ans
};

// Do not edit below this line
module.exports = removeFromArray;
