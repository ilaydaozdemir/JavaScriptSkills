//basic
function greet() {
    console.log("good mornıng")
}
greet()

//with paremater
function name(username) {
    console.log(username)
}
name("bruce")

function add(a, b) {
    return a + b;
}
const sum = add(5, 19)
console.log(sum)

//arrow function
const arrowSum = (a, b) => {
    return a + b;
}
const aSum = arrowSum(1, 3)
console.log(aSum)