//Q#42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// Sample array of magicians
var magicians = ["herry", "belly", "jouj"];
function make_great(magiciansArray) {
    return magiciansArray.map(function (magician) { return "WOW u did this amamzing ".concat(magician); });
}
function show_magicians(magiciansArray) {
    magiciansArray.forEach(function (magician) { return console.log(magician); });
}
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
