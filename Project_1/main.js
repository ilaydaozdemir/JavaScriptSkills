function Person(fName, lName) {
    this.firstName = fName
    this.lastName = lName
}
const person1 = new Person('bruce', "wayne")
const person2 = new Person('jhon', "wayne")

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}
console.log(person2.getFullName())