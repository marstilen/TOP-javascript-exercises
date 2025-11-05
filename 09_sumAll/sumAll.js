const sumAll = function(lowestValue, highestValue) {
    let sum = 0;
    if(lowestValue < 0 || highestValue < 0 || lowestValue === NaN || highestValue === NaN || lowestValue%1 != 0 || typeof lowestValue != "number" || typeof highestValue != "number"){
        return "ERROR";
    }
    else if(lowestValue > highestValue)
    {
        let temp = lowestValue; 
        lowestValue = highestValue;
        highestValue = temp;
    }
    while(lowestValue <= highestValue){
        sum += lowestValue;
        lowestValue++;
}
return sum};

// Do not edit below this line
module.exports = sumAll;
