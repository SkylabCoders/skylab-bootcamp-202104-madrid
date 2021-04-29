// function Person(name, age) {
//   return {
//     age,
//     name,
//     greet() {
//       console.log(`hi, ${name}`);
//     },
//   };
// }

class Person {
    arrHero = [{id:1, name:"Bombasto"}];
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`hi ${this.name}`);
    console.log(`hi ${this.arrHero[0].name}`)
  }
  static sayHi (){
    console.log(`hi`);
  }
}
