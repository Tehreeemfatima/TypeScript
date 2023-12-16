//Q#37: Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt1(size, message) {
    return size + " " + message;
}
var ans2 = make_shirt1("small is the new size of shirt", "pakistan is beautiful country");
console.log(ans2);
