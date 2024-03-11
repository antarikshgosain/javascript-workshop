var sunColors = ['red', 'orange', 'yellow']
var landColors = ['green', 'blue', 'brown']
var flowerColors = ['pink', 'purple', 'cyan']

//copies the whole array (no indexes mentioned)
var copiedSunColors = sunColors.slice();
console.log("Sun Colors: "+copiedSunColors)

//index from 0, before 2
copiedSunColors = sunColors.slice(0,2);
console.log("Sun Colors (copied): "+copiedSunColors)

//**SPREAD OPERATOR** (merges any number of objects)
var hotColors = [ ...sunColors , ...flowerColors ]
console.log("Hot colors: "+hotColors)

var allColors = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log("All Colors: " + allColors(sunColors, landColors, flowerColors))

//**REST OPERATOR** (can take in any number of arguments)
var allColors = (...args) => {
    return args;
};

console.log("All Colors (Rest Syntax): " + allColors(sunColors, landColors, flowerColors))





