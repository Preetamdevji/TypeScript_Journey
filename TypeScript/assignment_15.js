// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var GuestList = /** @class */ (function () {
    function GuestList(initialGuests) {
        this.guests = initialGuests;
    }
    GuestList.prototype.getGuests = function () {
        return this.guests;
    };
    GuestList.prototype.addGuest = function (guest) {
        this.guests.push(guest);
    };
    GuestList.prototype.removeGuest = function (guest) {
        var index = this.guests.indexOf(guest);
        if (index !== -1) {
            this.guests.splice(index, 1);
        }
        else {
            console.log("".concat(guest, " is not in the guest list."));
        }
    };
    GuestList.prototype.changeGuest = function (oldGuest, newGuest) {
        var index = this.guests.indexOf(oldGuest);
        if (index !== -1) {
            this.guests[index] = newGuest;
        }
        else {
            console.log("".concat(oldGuest, " is not in the guest list."));
        }
    };
    GuestList.prototype.sendInvitations = function () {
        console.log("Sending invitations to the following guests:");
        this.guests.forEach(function (guest) { return console.log(guest); });
    };
    return GuestList;
}());
var initialGuestList = ["Saad", "Masood", "Arash", "Sunny"];
var guestList = new GuestList(initialGuestList);
console.log("Initial guest list:");
console.log(guestList.getGuests());
guestList.changeGuest("Arash", "Moin");
guestList.sendInvitations();
