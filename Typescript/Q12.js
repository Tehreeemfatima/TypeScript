//Q#12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//print names
var names = ["Tehreem", "huba", "ayesha", "Aisha"];
//each person's name
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
//greetings
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var name_2 = names_2[_a];
    console.log("hello,".concat(name_2, "! you are my best friend"));
}
