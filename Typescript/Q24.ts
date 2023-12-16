//Q#24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let fName = "tehreem"
let lName = "fatima"
//Test1
console.log("Is fName is equal to lName? I predict false")
console.log(fName==lName)
//Test2
console.log("Is fName is not equal to lName? I predict true")
console.log(!(fName==lName))
//Test2(b)
console.log("is fName is equal to lName when case is ignored? i predict false")
console.log(fName.toLowerCase()==lName.toLowerCase())
//Test3
let p = 3;
let q = 4;
console.log("Is p is smaller than q? I predict true")
console.log(p<q)
//Test4
console.log("Is p is greater than q ? I predict false")
console.log(p>q)
//Test5
console.log("Is p is smaller than and equal to y ?  I predict true")
console.log(p<=q)
//Test6
console.log("Is p is greater  than and equal to y ?  I predict false")
console.log(p>=q)
//Test7
console.log("Is p is equal to 3 and y equal to 4?  I predict true")
console.log(p==3 && q==4)
//Test8
console.log("Is p is equal to 3 and y equal to 6?  I predict false")
console.log(p==3 && q==6)
//Test9
console.log("Is p is equal to 3 and y equal to 4?  I predict true")
console.log(p==3 || q==4)
//Test10
console.log("Is p is equal to 5 and y equal to 5?  I predict false")
console.log(p==5 || q==5)
//Test11
let arr2=[4,6,8]
console.log("is 4 in the array? I predict true")
console.log(arr2.includes(4))
//Test12
// Test12
console.log("Is 2 in the array? I predict false");
console.log(arr2.includes(2));

