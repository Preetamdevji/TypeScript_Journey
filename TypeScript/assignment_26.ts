// Seeing the World: Think of at least five places in the world you’d like to visit.
// using typescript

let placesToVisit: string[] = [
  "Tokyo",
  "Santorini",
  "Machu Picchu",
  "Venice",
  "Great Barrier Reef"
];

// Print original order
console.log("Original Order:");
console.log(placesToVisit);

// Print alphbetical order without modifying the original list
console.log("\nAlphbetical Order:");
console.log([...placesToVisit].sort());

// Verify original order is unchanged
console.log("\nOriginal Order (still):");
console.log(placesToVisit);

// Print reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Verify original order is unchanged
console.log("\nOriginal Order (still):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order (again):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
