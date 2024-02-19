// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var guestList = ["Arash", "Saad", "Masood"];
// Display the original guest list
console.log("Original Guest List:");
console.log(guestList);
// Someone couldn't make it, so we need to replace them
var absentGuest = "Arash";
var newGuest = "David";
// Find the index of the absent guest
var absentGuestIndex = guestList.indexOf(absentGuest);
// Replace the absent guest with the new one
if (absentGuestIndex !== -1) {
    guestList[absentGuestIndex] = newGuest;
}
// Display the updated guest list
console.log("\nUpdated Guest List:");
console.log(guestList);
// Inform people that we found a bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");
