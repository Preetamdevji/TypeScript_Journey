// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Array of guests
const guestList: string[] = ["Saad", "Masood", "Sunny"];

// Loop through the array and print invitation messages
guestList.forEach((guest) => {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely, [Your Name]`);
});
