//Q#43: Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
function make_great_copy(magicians) {
    var great_magicians = [];
    for (var i = 0; i < magicians.length; i++) {
        great_magicians.push("WOW u did this amamzing " + magicians[i]);
    }
    return great_magicians;
}
// Call the function with an array of magician's names
var magicians3 = ["herry", "belly", "jouj"];
var great_magicians = make_great_copy("Herry");
console.log(great_magicians);
