// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

class GuestList {
    private guests: string[];

    constructor(initialGuests: string[]) {
        this.guests = initialGuests;
    }

    getGuests(): string[] {
        return this.guests;
    }

    addGuest(guest: string): void {
        this.guests.push(guest);
    }

    removeGuest(guest: string): void {
        const index = this.guests.indexOf(guest);
        if (index !== -1) {
            this.guests.splice(index, 1);
        } else {
            console.log(`${guest} is not in the guest list.`);
        }
    }

    changeGuest(oldGuest: string, newGuest: string): void {
        const index = this.guests.indexOf(oldGuest);
        if (index !== -1) {
            this.guests[index] = newGuest;
        } else {
            console.log(`${oldGuest} is not in the guest list.`);
        }
    }

    sendInvitations(): void {
        console.log("Sending invitations to the following guests:");
        this.guests.forEach(guest => console.log(guest));
    }
}

const initialGuestList = ["Saad", "Masood", "Arash", "Sunny"];
const guestList = new GuestList(initialGuestList);

console.log("Initial guest list:");
console.log(guestList.getGuests());

guestList.changeGuest("Arash", "Moin");
guestList.sendInvitations();
