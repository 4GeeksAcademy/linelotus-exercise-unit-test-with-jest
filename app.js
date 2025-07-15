// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
console.log(fromEuroToDollar(10));

const fromDollarToYen = function(valueInDollar) {
    // Convert the 
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}
console.log(fromDollarToYen(10));

const fromYenToPound = function(valueInYen) {
    // Convert the
    let valueInPound = valueInYen * .0055;
    // return the Pound value
    return valueInPound;
}
console.log(fromYenToPound(10));

// This is my function that sums two numbers
//const sum = (a,b) => {
 //   return a + b}

// Just a console log for ourselves
//console.log(sum(7,3))


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar , fromDollarToYen,fromYenToPound, };
