const removeFromArray = function(arr, elementToRemove) {
    for (let i = 1; i < arguments.length; i++) {    
        arr = arr.filter(element => element !== arguments[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
