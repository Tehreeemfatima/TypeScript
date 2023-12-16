//Q#31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var username_array = ["baby", "kids", "teenagers", "adult"];
if (username_array.length === 0) {
    console.log("Need to find some users.");
}
else {
    username_array.pop();
    username_array.pop();
    username_array.pop();
    username_array.pop();
    username_array.pop();
    console.log(username_array);
}
