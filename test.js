// Import the function sum from the app.js file
//const { sum } = require('./app.js');

// Start your first test
//test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    //let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
   // expect(total).toBe(23);});
//test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    //const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
   // const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
   // const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
   //  expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)})

//test("156.5 yen should be 1 dollars", function() {
    // Import the function from app.js
    //const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
   // const dollars = fromDollarToYen(156.5);

    // If 1 yen is 0.0068 dollars, then Yen should be (156.5 * 0.0068)
  //  const expected = 156.5 * 0.0068; 
    
    // This is the comparison for the unit test
  //   expect(fromDollarToYen(156.5)).toBe(0.0068); // 1 euro is 1.07 dollars, then 0.0068 euros should be = (156.5 * 0.0068)})


   const { fromYenToPound, fromDollarToYen, fromEuroToDollar } = require('./app.js');
test('converts 10 dollars to yen correctly',()=> {
    const result = fromDollarToYen(10);
    expect(result).toBeCloseTo(1565); //10*156.5
})
    test('converts 10 euros to dollars correctly',()=> {
    const result = fromEuroToDollar(10);
    expect(result).toBeCloseTo(10.7); //10*1.07
})

    test('converts 10 yen to pounds correctly',()=> {
    const result = fromYenToPound(10);
    expect(result).toBeCloseTo(.055); //10*.0055
})