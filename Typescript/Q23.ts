//Q#23: Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test.  Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let x = 5;
let y = 10
//Test1
console.log("Is x is smaller than y? I predict true")
console.log(x<y)
//TEST2
console.log("Is x is greater  than y? I predict false")
console.log(x>y)
//Test3
console.log("Is x is smaller than  and equal to y? I predict true")
console.log(x<=y)
//Test4
console.log("Is x is greater than y? I predict false")
console.log(x>=y)
//Test5
console.log("Is x is not equal to y? i predict false ")
console.log(!(x==y))
//Test6
console.log("Is x is equal to y? I predict false")
console.log((x==y))
//Test7
console.log("Is x is equal to y? I predict false")
console.log(x===y)
//Test8
console.log("Is x is not equal to y? I predict true")
console.log(!(x===y))
//Test9
console.log("Is x is equal to 5 and y equal to 10? I predict true")
console.log(x==5 && y==10 )
//Test10
console.log("Is x is equal to 5 or y is equal to 5? I predict false")
console.log(x==5 && y==5)
