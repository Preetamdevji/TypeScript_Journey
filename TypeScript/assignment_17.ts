// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let guestList: string[] = ["Saad", "Masood", "Arash"];

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


let newGuest: string = "Sunny";


guestList.push(newGuest);

handleRegrets(unableToAttend);

printRegret(unableToAttend);

console.log(`Dear ${newGuest}, you are invited to dinner as a replacement. Please join us!`);
