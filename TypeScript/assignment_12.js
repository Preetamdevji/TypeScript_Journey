// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
function toTitleCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
var friendNames = ['saad', 'masood', 'arash', 'sunny'];
friendNames.forEach(function (name) { return console.log("Hello, ".concat(toTitleCase(name), "! Have a great day.")); });
