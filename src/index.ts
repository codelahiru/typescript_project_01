//// Basic Types -----------------------------------------------------------------------

// There are three main primitives in JavaScript and TypeScript - number, string, boolean

let id: number = 5
let conpany: string = 'Ceylonsys'
let isPublished: boolean = true

// Special Types - any, unknown, never
let x: any = 'hello'
let w: unknown = 1
/*let y: never = true*/

//// how to initialize -----------------------------------------------------------------------

let age: number
age = 34

//// TypeScript Arrays -----------------------------------------------------------------------

let ids: number[] = [1,2,3,4,5]

//// TypeScript Tuples -----------------------------------------------------------------------

let person: [number, string, boolean]
person = [30, 'John', true]

// Tuple array

let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Joe'],
    [3, 'Kamil'],
]

//// TypeScript Union Types -----------------------------------------------------------------------

let pid: number | string
pid = 22
pid = 'wef'

//// TypeScript Enums -----------------------------------------------------------------------


//// TypeScript Object Types -----------------------------------------------------------------------

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//// Type Assertion -----------------------------------------------------------------------


//// Function -----------------------------------------------------------------------

function addNum(x: number, y: number): number {
    return x + y
}

// using void

function log(message: string | number): void {
        console.log(message)
}








