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


function sendSecondInvitations(guests: string[]): void {
    guests.forEach(guest => {
        console.log(`Dear ${guest}, just a reminder that you are invited to dinner. We hope to see you there!`);
    });
}


inviteGuests(guestList);


let unableToAttend: string = guestList.pop()!;
let newGuest: string = "Sunny";

guestList.push(newGuest);

handleRegrets(unableToAttend);

printRegret(unableToAttend);

console.log(`Dear ${newGuest}, you are invited to dinner as a replacement. Please join us!`);

sendSecondInvitations(guestList);
