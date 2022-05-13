const person = {
    name: "ilayda",
    sayMyName: function () {
        console.log(`My name is ${this.name}`)
    }
}
person.sayMyName()
