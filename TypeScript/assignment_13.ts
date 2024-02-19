// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Array of motorcycles
const motorcycles: string[] = ["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW"];

// Loop through the array and print statements
for (let i = 0; i < motorcycles.length; i++) {
    console.log(`I would like to own a ${motorcycles[i]} motorcycle.`);
}
