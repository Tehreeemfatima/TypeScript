 //Q#16:
    // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

    // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    
    // • Add one new guest to the beginning of your array.
    
    // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
    



let guest: string[] = ["tehreem", "huba", "rumi", "aisha", "fatima"];

console.log("\nGood news! We found a bigger dinner table.\n");

let newguest: string = "kainat";
guest.unshift(newguest);
console.log(guest);

let middleguest: string = "abiha";
let middleindex: number = Math.floor(guest.length / 2);
guest.splice(middleindex, 0, middleguest);
console.log(guest);

guest.push("amna");
console.log(guest);

guest.forEach((item: string) => console.log(`Dear ${item}, you are invited to dinner`));
