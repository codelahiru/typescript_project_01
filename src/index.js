//// Basic Types -----------------------------------------------------------------------
// There are three main primitives in JavaScript and TypeScript - number, string, boolean
var id = 5;
var company = 'Ceylonsys';
var isPublished = true;
// Special Types - any, unknown, never
var x = 'hello';
var w = 1;
/*let y: never = true*/
//// how to initialize -----------------------------------------------------------------------
var age;
age = 34;
//// TypeScript Arrays -----------------------------------------------------------------------
var ids = [1, 2, 3, 4, 5];
//// TypeScript Tuples -----------------------------------------------------------------------
var person;
person = [30, 'John', true];
// Tuple array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'Joe'],
    [3, 'Kamil'],
];
//// TypeScript Union Types ---------------------------------------------------------
var pid;
pid = 22;
pid = 'wef';
var user = {
    id: 1,
    name: 'John'
};
//// Type Assertion -----------------------------------------------------------------
var cid = 1;
var customerID1 = cid;
// another way to do it
var customerID2 = cid;
//// Function -----------------------------------------------------------------------
function addNum(x, y) {
    return x + y;
}
// using void
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John',
};
//user1.id = 5 // cannot set user1 id to 5 cos of readonly property
//// Classes ------------------------------------------------------------------
// The members of a class (properties & methods) are typed using type annotations, similar to variables
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, 'Brad');
var mike = new Person(2, 'Mike');
//console.log(brad, mike)
// using access modifiers - 'public', 'private' and 'protected'
// class Animal {
//     public kingdom: string
//     private extinct: boolean
//     protected id_no: number
//     constructor(kingdom: string, extinct: boolean, id_no: number){
//         this.kingdom = kingdom
//         this.extinct = extinct
//         this.id_no = id_no
//     }
// }
// const dodo = new Animal('Animalia', true, 1)
// const lion = new Animal('Animalia', false, 2)
// class Employee extends Person {
//     position: string
//     constructor(id: number, name: string, position: string){
//         super(id, name)
//         this.position = position
//     }
// }
// const emp = new Employee(3, 'Shawn', 'Developer')
// console.log(emp.name)
