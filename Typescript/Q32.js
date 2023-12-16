//Q#32:Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// list of current user
var currents = ['tehreem', 'fatima', 'huba', 'aisha', 'haya'];
//list new user
var newusers = ['Ayesha', 'kainat', 'fiza', 'aima', 'attia'];
var _loop_1 = function (newUser) {
    //
    var lowercasenewuser = newUser.toLowerCase();
    var isUnique = !currents.some(function (currentUser) { return currentUser.toLowerCase() === lowercasenewuser; });
    //print a message based on the result
    if (isUnique) {
        console.log("username '".concat(newUser, "'is available."));
    }
    else {
        console.log("sorry, the username '".concat(newUser, "'is already taken.enter a new name."));
    }
};
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var newUser = newusers_1[_i];
    _loop_1(newUser);
}
