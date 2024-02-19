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
    DinnerParty.prototype.apologizeAndRemoveGuest = function () {
        while (this.guestList.length > 2) {
            var removedGuest = this.guestList.pop();
            if (removedGuest) {
                console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
            }
        }
    };
    return DinnerParty;
}());
var initialGuests = ["Arash", "Saad", "Masood", "Sunny"];
var dinnerParty = new DinnerParty(initialGuests);
dinnerParty.apologizeAndRemoveGuest();
dinnerParty.hostDinner();
