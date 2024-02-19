var DinnerGuests = /** @class */ (function () {
    function DinnerGuests() {
        this.guestList = [];
    }
    DinnerGuests.prototype.addGuest = function (guest) {
        this.guestList.push(guest);
    };
    DinnerGuests.prototype.inviteGuests = function () {
        console.log("You are inviting ".concat(this.guestList.length, " people to dinner."));
        this.guestList.forEach(function (guest) {
            console.log("Dear ".concat(guest, ", you are cordially invited to dinner. Please join us for an evening of great food and conversation."));
        });
    };
    return DinnerGuests;
}());
var dinnerParty = new DinnerGuests();
dinnerParty.addGuest("Arash");
dinnerParty.addGuest("Masood");
dinnerParty.addGuest("Saad");
dinnerParty.inviteGuests();
