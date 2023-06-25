"use strict";
//// Basic Types -----------------------------------------------------------------------
// There are three main primitives in JavaScript and TypeScript - number, string, boolean
let id = 5;
let conpany = 'Ceylonsys';
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
//// TypeScript Union Types -----------------------------------------------------------------------
let pid;
pid = 22;
pid = 'wef';
const user = {
    id: 1,
    name: 'John'
};
//// Type Assertion -----------------------------------------------------------------------
//// Function -----------------------------------------------------------------------
function addNum(x, y) {
    return x + y;
}
// using void
function log(message) {
    console.log(message);
}
