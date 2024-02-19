// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// using typescript

type Item = {
    name: string;
    description: string;
    price: number;
};

const items: { [key: string]: Item } = {
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

for (const key in items) {
    if (items.hasOwnProperty(key)) {
        const item = items[key];
        console.log(`Name: ${item.name}`);
        console.log(`Description: ${item.description}`);
        console.log(`Price: $${item.price}`);
        console.log("-------------------------");
    }
}
