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
  }
  
  const initialGuests: string[] = ["Arash", "Saad", "Masood", "Sunny"];
  const dinnerParty = new DinnerParty(initialGuests);
  
  const moreGuests: string[] = ["John", "Jalal", "Daniyal"];
  dinnerParty.setGuestList([...initialGuests, ...moreGuests]);
  
  if (dinnerParty.getGuestList().length <= 2) {
    console.log("Sorry, you can only invite two people for dinner.");
  } else {
    dinnerParty.hostDinner();
  }
  