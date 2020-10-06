class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    printName() {
        console.log(this.name, this.age);
    }

    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
}

var student = new Student('Vaibhav', 35);
console.log(student.id)
