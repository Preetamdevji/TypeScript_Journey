// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var Guest = /** @class */ (function () {
    function Guest(name) {
        this.name = name;
    }
    return Guest;
}());
var DinnerTable = /** @class */ (function () {
    function DinnerTable() {
        this.guests = [];
    }
    DinnerTable.prototype.addGuest = function (guest) {
        this.guests.push(guest);
    };
    DinnerTable.prototype.listGuests = function () {
        console.log("Guests at the dinner table:");
        this.guests.forEach(function (guest) {
            console.log("- " + guest.name);
        });
    };
    return DinnerTable;
}());
// Create a new dinner table
var dinnerTable = new DinnerTable();
// Add three more guests
var guest1 = new Guest("John");
var guest2 = new Guest("Arash");
var guest3 = new Guest("Saad");
dinnerTable.addGuest(guest1);
dinnerTable.addGuest(guest2);
dinnerTable.addGuest(guest3);
// List all guests
dinnerTable.listGuests();
