// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; // convert Celsius to Fahrenheit
}
// Test the temperature conversion functions
var celsiusTemperature = 25;
console.log("".concat(celsiusTemperature, "\u00B0C is equal to ").concat(celsiusToFahrenheit(celsiusTemperature), "\u00B0F"));
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is 1
    }
    else {
        return n * factorial(n - 1); // Recursively calculate factorial
    }
}
// Test the factorial function
var numberToFactorial = 5;
var result = factorial(numberToFactorial);
console.log("The factorial of ".concat(numberToFactorial, " is: ").concat(result));
