// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (name) { return "the Great ".concat(name); });
    return greatMagicians;
}
function showMagicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function main() {
    var magicians = ["Saad", "Masood", "David"];
    var originalMagicians = __spreadArray([], magicians, true);
    var greatMagicians = makeGreat(__spreadArray([], magicians, true));
    console.log("Original Magicians:");
    showMagicians(originalMagicians);
    console.log("\nGreat Magicians:");
    showMagicians(greatMagicians);
}
main();
