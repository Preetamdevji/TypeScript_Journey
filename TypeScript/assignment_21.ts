
let guestList: string[] = ["Alice", "Bob", "Charlie"];


console.log("Original Guest List:");
console.log(guestList);


const absentGuest = "Bob";
const newGuest = "David";


const absentGuestIndex = guestList.indexOf(absentGuest);

if (absentGuestIndex !== -1) {
    guestList[absentGuestIndex] = newGuest;
}

console.log("\nUpdated Guest List:");
console.log(guestList);

console.log("\nGood news! We found a bigger dinner table.");
