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
