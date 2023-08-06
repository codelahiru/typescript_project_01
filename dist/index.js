"use strict";
//// Basic Types -----------------------------------------------------------------------
// There are three main primitives in JavaScript and TypeScript - number, string, boolean
let id = 5;
let company = 'Ceylonsys';
let isPublished = true;
// Special Types - any, unknown, never
let x = 'hello';
let w = 1;
/*let y: never = true*/
//// how to initialize -----------------------------------------------------------------------
let age;
age = 34;
//// TypeScript Arrays -----------------------------------------------------------------------
let ids = [1, 2, 3, 4, 5];
//// TypeScript Tuples -----------------------------------------------------------------------
let person;
person = [30, 'John', true];
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Joe'],
    [3, 'Kamil'],
];
//// TypeScript Union Types ---------------------------------------------------------
let pid;
pid = 22;
pid = 'wef';
const user = {
    id: 1,
    name: 'John'
};
//// Type Assertion -----------------------------------------------------------------
let cid = 1;
let customerID1 = cid;
// another way to do it
let customerID2 = cid;
//// Function -----------------------------------------------------------------------
function addNum(x, y) {
    return x + y;
}
// using void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
//user1.id = 5 // cannot set user1 id to 5 cos of readonly property
//// Classes ------------------------------------------------------------------
// The members of a class (properties & methods) are typed using type annotations, similar to variables
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const mike = new Person(2, 'Mike');
console.log(brad, mike);
// using access modifiers - 'public', 'private' and 'protected'
class Animal {
    constructor(kingdom, extinct, id_no) {
        this.kingdom = kingdom;
        this.extinct = extinct;
        this.id_no = id_no;
    }
}
const dodo = new Animal('Animalia', true, 1);
const lion = new Animal('Animalia', false, 2);
// subclass - using 'extends'
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name);
console.log(emp.register()); // output of 'node index' for this is 'Shawn is now registered'
//// Generics -------------------------------------------------------------
