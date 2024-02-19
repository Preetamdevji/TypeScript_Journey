// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
class Guest {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class DinnerTable {
    guests: Guest[];
    constructor() {
        this.guests = [];
    }

    addGuest(guest: Guest) {
        this.guests.push(guest);
    }

    listGuests() {
        console.log("Guests at the dinner table:");
        this.guests.forEach(guest => {
            console.log("- " + guest.name);
        });
    }
}

// Create a new dinner table
let dinnerTable = new DinnerTable();

// Add three more guests
let guest1 = new Guest("John");
let guest2 = new Guest("Arash");
let guest3 = new Guest("Saad");

dinnerTable.addGuest(guest1);
dinnerTable.addGuest(guest2);
dinnerTable.addGuest(guest3);

// List all guests
dinnerTable.listGuests();
