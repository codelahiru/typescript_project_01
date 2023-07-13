/* ******************* */

//// Basic Types -----------------------------------------------------------------------

// There are three main primitives in JavaScript and TypeScript - number, string, boolean

let id: number = 5
let company: string = 'Ceylonsys'
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

//// TypeScript Union Types ---------------------------------------------------------

let pid: number | string
pid = 22
pid = 'wef'

//// TypeScript Enums ---------------------------------------------------------------


//// TypeScript Object Types --------------------------------------------------------

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//// Type Assertion -----------------------------------------------------------------

let cid: any = 1
let customerID1 = <number>cid

// another way to do it
let customerID2 = cid as number

//// Function -----------------------------------------------------------------------

function addNum(x: number, y: number): number {
    return x + y
}

// using void

function log(message: string | number): void {
        console.log(message)
}


//// Interfaces ---------------------------------------------------------------------

// can have readonly and optional properties

interface UserInterface {
    readonly id: number, // can have readonly properties
    name: string,
    age?: number       // age is optional, so if you don't give age to user1, it won't show error
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

//user1.id = 5 // cannot set user1 id to 5 cos of readonly property





