const person = {
    name: "ilayda",
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName()

function sayMyName() {
    console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

function Person(name) {
    //this={}
    this.name = name
}
const p1 = new Person("peter")
const p2 = new Person("white")

console.log(p1.name, p2.name)

