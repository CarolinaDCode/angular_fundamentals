const username: string = 'carolinaDCode';

const sum = (a: number, b: number) => {
    return a + b;
};

sum(2, 6);

class Person {
    /** 
    age: number;
    lastName: string;
    */

    constructor(public age: number, public lastName: string){
        /** Con typeScript puedes ahorrarte la declaración y asignación
        this.age = age;
        this.lastName = lastName;
        */
    }
}

const nico = new Person(15, 'Molina');
nico.age;