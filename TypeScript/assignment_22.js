// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var DinnerParty = /** @class */ (function () {
    function DinnerParty(initialGuests) {
        this.guestList = initialGuests;
    }
    DinnerParty.prototype.setGuestList = function (guests) {
        this.guestList = guests;
    };
    DinnerParty.prototype.getGuestList = function () {
        return this.guestList;
    };
    DinnerParty.prototype.prepareDinnerTable = function () {
        console.log("Preparing dinner table...");
        console.log("Dinner table is ready!");
    };
    DinnerParty.prototype.hostDinner = function () {
        console.log("Hosting dinner...");
        this.prepareDinnerTable();
        console.log("Welcome to the dinner party!");
        this.guestList.forEach(function (guest) { return console.log("".concat(guest, " is here!")); });
        console.log("Enjoy the meal!");
    };
    return DinnerParty;
}());
var initialGuests = ["Arash", "Saad", "Masood", "Sunny"];
var dinnerParty = new DinnerParty(initialGuests);
var spaceForTwoGuests = ["Saad", "Masood"];
dinnerParty.setGuestList(spaceForTwoGuests);
dinnerParty.hostDinner();
