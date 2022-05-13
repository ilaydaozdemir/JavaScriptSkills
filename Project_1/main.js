function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}
const person1 = new Person('bruce', "wayne")
const person2 = new Person('jhon', "wayne")

person1.getFullName = function () {
    return this.firstName + " " + this.lastName
}
console.log(person1.getFullName())