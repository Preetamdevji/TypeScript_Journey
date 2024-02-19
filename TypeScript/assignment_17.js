// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var guestList = ["Saad", "Masood", "Arash"];
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
var newGuest = "Sunny";
guestList.push(newGuest);
handleRegrets(unableToAttend);
printRegret(unableToAttend);
console.log("Dear ".concat(newGuest, ", you are invited to dinner as a replacement. Please join us!"));
