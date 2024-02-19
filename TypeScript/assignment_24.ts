class DinnerParty {
    private guestList: string[];
  
    constructor(initialGuests: string[]) {
      this.guestList = initialGuests;
    }
  
    setGuestList(guests: string[]) {
      this.guestList = guests;
    }
  
    getGuestList(): string[] {
      return this.guestList;
    }
  
    prepareDinnerTable(): void {
      console.log("Preparing dinner table...");
      console.log("Dinner table is ready!");
    }
  
    hostDinner(): void {
      console.log("Hosting dinner...");
      this.prepareDinnerTable();
      console.log("Welcome to the dinner party!");
      this.guestList.forEach(guest => console.log(`${guest} is here!`));
      console.log("Enjoy the meal!");
    }
  
    apologizeAndRemoveGuest(): void {
      while (this.guestList.length > 2) {
        const removedGuest = this.guestList.pop();
        if (removedGuest) {
          console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
        }
      }
    }
  }
  
  const initialGuests: string[] = ["Arash", "Saad", "Masood", "Sunny"];
  const dinnerParty = new DinnerParty(initialGuests);
  
  dinnerParty.apologizeAndRemoveGuest();
  
  dinnerParty.hostDinner();
  