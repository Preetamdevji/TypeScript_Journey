// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var ToUpperCaseArray = function (arr) {
    return arr.map(function (item) { return item.toUpperCase(); });
};
var personName = ["Maxwell", "john", "braNdy", "eriC"];
console.log("\"To Upper Case\", ".concat(ToUpperCaseArray(personName)));
var toLowerCase = function (arr) {
    return arr.map(function (item) { return item.toLowerCase(); });
};
var arrName = ["Maxwell", "john", "braNdy", "eriC"];
console.log("\"To Lower Case\", ".concat(toLowerCase(arrName)));
// ----------------------------------------------------------
function toTitleCaseArray(arr) {
    var result = [];
    for (var index in arr) {
        var words = arr[index].split(' ');
        var titleCasedWords = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); });
        result.push(titleCasedWords.join(' '));
    }
    return result;
}
var arrayName = ["Maxwell", "john", "braNdy", "eriC"];
console.log(toTitleCaseArray(arrayName));
