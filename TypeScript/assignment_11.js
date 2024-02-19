// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
function toTitleCase(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
var friendNames = ['saad', 'masood', 'arash', 'sunny'];
friendNames.forEach(function (name) { return console.log(toTitleCase(name)); });
