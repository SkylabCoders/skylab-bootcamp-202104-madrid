export class Person {

    name:string;
    surname:string;
    age:number;

    constructor(
       name: string,
       surname: string,
       age: number
    )
     { 
         this.name = name,
         this.surname = surname,
         this.age = age
      }
  
  }

export interface Character {
    name:string;
    surname: string;
    age: number;
}