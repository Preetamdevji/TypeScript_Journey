// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function makeGreat(magicians: string[]): string[] {
    const greatMagicians = magicians.map(name => `the Great ${name}`);
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

function main(): void {
    const magicians: string[] = ["Saad", "Masood", "David"];

    const originalMagicians: string[] = [...magicians];

    const greatMagicians: string[] = makeGreat([...magicians]);

    console.log("Original Magicians:");
    showMagicians(originalMagicians);

    console.log("\nGreat Magicians:");
    showMagicians(greatMagicians);
}

main();
