class User<T, S> {
  name: T;
  age: S;

  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }

  sayMyFullName<T>(surname: T): string {
    if (typeof surname !== "string") {
      return `I have only name:${this.name}`;
    } else {
      return `${this.name} ${surname}`;
    }
  }
}

// class Administrator<T> extends User<string, number>{
//     rules: T;
// }

const ivan = new User("str", 2);
console.log(ivan);

const nameData = "Alex";
const ageData = 50;
const alex = new User<string, number>(nameData, ageData);
