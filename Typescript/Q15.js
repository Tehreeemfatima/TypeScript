//Q#15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Declare and initialize the 'guest' array
var guest = ["tehreem", "huba", "ayesha", "aisha", "fatima"];
var changes = "ayesha";
console.log("Sorry ".concat(changes, " is not coming to dinner"));
var new_guest = "rumi";
var indexOfChanges = guest.indexOf(changes);
if (indexOfChanges !== -1) {
    guest[indexOfChanges] = new_guest;
}
guest.forEach(function (item) { return console.log("Dear ".concat(item, ", you are invited to dinner")); });
console.log(guest);
