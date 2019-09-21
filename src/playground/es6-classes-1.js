class Person {
  constructor(name = "Anonymous", age = null) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello ${this.name}!!`;
  }

  getDescription() {
    return `${this.name} is ${this.age ? this.age : "unknown"} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

const me = new Person("Kash", 25);
console.log(me.getDescription());

const other = new Student("Mike", 30, "Computer Science");
console.log(other.getDescription());
