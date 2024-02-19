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
      // Logic for preparing the dinner table
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
  
  // Example usage:
  const initialGuests: string[] = ["Alice", "Bob", "Charlie", "David"];
  const dinnerParty = new DinnerParty(initialGuests);
  
  // Scenario: One guest can't make it
  const absentGuest = "Bob";
  const replacementGuest = "Eve";
  
  const updatedGuestList = initialGuests.map(guest => guest === absentGuest ? replacementGuest : guest);
  dinnerParty.setGuestList(updatedGuestList);
  
  // Informing people about the bigger dinner table
  console.log("Great news, everyone! We found a bigger dinner table!");
  
  // Hosting the dinner with the updated guest list
  dinnerParty.hostDinner();
  