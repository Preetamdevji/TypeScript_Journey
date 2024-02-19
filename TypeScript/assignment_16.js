// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var guestList = ["Saad", "Arash", "Masood"];
function inviteGuests(guests) {
    guests.forEach(function (guest) {
        console.log("Dear ".concat(guest, ", you are invited to dinner. Please join us!"));
    });
}
function handleRegrets(guestName) {
    console.log("Unfortunately, ".concat(guestName, " can't make it to dinner."));
}
function printRegret(guestName) {
    console.log("".concat(guestName, " can't make it to dinner."));
}
inviteGuests(guestList);
var unableToAttend = guestList.pop();
handleRegrets(unableToAttend);
printRegret(unableToAttend);
