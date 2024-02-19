// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

function celsiusToFahrenheit(celsius:number):number{
    return  (celsius * 9/5) + 32; // convert Celsius to Fahrenheit
}

// Test the temperature conversion functions
const celsiusTemperature = 25;
console.log(`${celsiusTemperature}°C is equal to ${celsiusToFahrenheit(celsiusTemperature)}°F`);



function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1; // Factorial of 0 and 1 is 1
    } else {
        return n * factorial(n - 1); // Recursively calculate factorial
    }
}

// Test the factorial function
const numberToFactorial = 5;
const result = factorial(numberToFactorial);
console.log(`The factorial of ${numberToFactorial} is: ${result}`);


