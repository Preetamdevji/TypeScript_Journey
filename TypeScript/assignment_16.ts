// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestList: string[] = ["Saad", "Arash", "Masood"];


function inviteGuests(guests: string[]): void {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
    });
}


function handleRegrets(guestName: string): void {
    console.log(`Unfortunately, ${guestName} can't make it to dinner.`);
}


function printRegret(guestName: string): void {
    console.log(`${guestName} can't make it to dinner.`);
}

inviteGuests(guestList);

let unableToAttend: string = guestList.pop()!;

handleRegrets(unableToAttend);

printRegret(unableToAttend);
