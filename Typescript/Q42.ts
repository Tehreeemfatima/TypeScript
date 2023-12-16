//Q#42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// Sample array of magicians
let magicians: string[] = ["herry","belly","jouj"];


function make_great(magiciansArray: string[]): string[] {
    return magiciansArray.map(magician => `WOW u did this amamzing ${magician}`);
}

function show_magicians(magiciansArray: string[]): void {
    magiciansArray.forEach(magician => console.log(magician));
}
let greatMagicians = make_great(magicians);

show_magicians(greatMagicians);
