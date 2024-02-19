// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// using typescript
var items = {
    laptop: {
        name: "Laptop",
        description: "A portable computer for work and entertainment.",
        price: 999.99,
    },
    book: {
        name: "Book",
        description: "A physical or digital publication containing literary or informational content.",
        price: 19.99,
    },
    smartphone: {
        name: "Smartphone",
        description: "A mobile device with advanced computing capability and connectivity.",
        price: 799.99,
    },
    headphones: {
        name: "Headphones",
        description: "A pair of audio devices worn over the ears for listening to sound.",
        price: 149.99,
    },
};
for (var key in items) {
    if (items.hasOwnProperty(key)) {
        var item = items[key];
        console.log("Name: ".concat(item.name));
        console.log("Description: ".concat(item.description));
        console.log("Price: $".concat(item.price));
        console.log("-------------------------");
    }
}
