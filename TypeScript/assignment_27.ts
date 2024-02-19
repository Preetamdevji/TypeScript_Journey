// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


class DinnerGuests {
    private guestList: string[];
  
    constructor() {
      this.guestList = [];
    }
  
    addGuest(guest: string): void {
      this.guestList.push(guest);
    }
  
    inviteGuests(): void {
      console.log(`You are inviting ${this.guestList.length} people to dinner.`);
      this.guestList.forEach((guest) => {
        console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of great food and conversation.`);
      });
    }
  }
  
  const dinnerParty = new DinnerGuests();
  
  dinnerParty.addGuest("Arash");
  dinnerParty.addGuest("Masood");
  dinnerParty.addGuest("Saad");
  
  dinnerParty.inviteGuests();
  