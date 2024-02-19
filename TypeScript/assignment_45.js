// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return { size: size, message: message };
}
var largeShirt = make_shirt();
console.log("Large Shirt:", largeShirt);
var mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);
var smallShirt = make_shirt("small", "Hello, World!");
console.log("Small Shirt:", smallShirt);
