// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

function toTitleCase(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

let friendNames: string[] = ['saad', 'masood', 'arash', 'sunny'];
friendNames.forEach(name => console.log(toTitleCase(name)));


