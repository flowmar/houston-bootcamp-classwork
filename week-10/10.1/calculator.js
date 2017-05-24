// Input is taken from whatever is typed into the terminal prompt
var input = process.argv;
console.log(input);

// Store the user input into variables
// Index 0 and 1 are 'node' and 'calculator.js'
var operator = input[3];
var num1 = input[2];
var num2 = input[4];

// Series of if statements which change the outcome based upon the operator and num variables
if (operator === "+") {
    // parseFloat is used because input is read from the command line as a string
    console.log(parseFloat(num1) + parseFloat(num2));
}
if (operator === "-") {
    console.log(parseFloat(num1) - parseFloat(num2));
}
// . is used instead of * because * is a wildcard character and breaks the code
if (operator === ".") {
    console.log(parseFloat(num1) * parseFloat(num2));
}
if (operator === "/") {
    console.log(parseFloat(num1) / parseFloat(num2));
}