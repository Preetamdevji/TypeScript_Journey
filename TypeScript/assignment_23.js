var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var moreGuests = ["John", "Jalal", "Daniyal"];
dinnerParty.setGuestList(__spreadArray(__spreadArray([], initialGuests, true), moreGuests, true));
if (dinnerParty.getGuestList().length <= 2) {
    console.log("Sorry, you can only invite two people for dinner.");
}
else {
    dinnerParty.hostDinner();
}
