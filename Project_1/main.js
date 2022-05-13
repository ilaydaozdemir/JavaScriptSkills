class Person {
    constructor(fname, lname) {
        this.fisrtName = fname
        this.lastName = lname
    }
    sayMyName() {
        return this.fisrtName + " " + this.lastName
    }
}
const classP1 = new Person("x", "y")
console.log(classP1.sayMyName())