// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points!");
}
// Failing version
alien_color = 'red'; // Changing alien color to red
if (alien_color === 'green') {
    console.log("Player just earned 5 points!"); // This block won't be executed since alien_color is not 'green'
}
