// // Numbers

// let age: number = 50

// let weight: number = 150.5

// // string
// let myName: string = "hamuuda"
// console.log(myName.toUpperCase());

// // concatination
// let greeting: string = `hello ${myName}`
// // Array
// let numbers: number[] = [1,2,3,4]
// console.log(numbers.length);
// // tupple is uses when you want to use fixed-array
// let person: [string,number] = ["john", 60]
// // enum waxaa la isticmaalaa marka la rabo inla sameeyo wax const eh oo aan isbadeleynin
// // inta badan waxaa lagu keydiyaa status-yada
// enum color { Red, Green, Blue }
// let myColor: color = color.Green

// enum Role { ADMIN, USER, MARKETER }
// let currentUser: Role = Role.ADMIN

// // Any waxaa loo isticmaala wax aan la ogeyn wexey qaadan doonto wheather String, number or etc
// // mar kastana wuu is badali karaa
// let variable: any = "myVariable"
// variable = 2024

// // void waxaa loo isticmaalaa functions-ka aan waxbo soo celineenin
// function logMessage(message: string): void{
//     console.log(message);
// }
// logMessage("hi")

// //  Function Annotation
// function greet(name: string): string {
//     return `Hello ${name}`
// }

// // function expression
// const add : (a: number ,b: number) => number =  function (a,b) {
//     return a + b 
// }

// // function Arrow
// const substract : (a: number, b: number) => number = (a,b) =>{
//     return a-b
// }
// substract(20, 90)

// // marka aad rabtid function-kaga inaa ka tagi kartid ama aaku dari kartid waxaa raacineysaa "?"
// function createGreeting(name: string, age?: number): string {

//     return `Hello${name} and I am ${age} years old`
// }
// createGreeting("hamuuda")


// // Objects

// const user : { name: string, age: number} = { name: "user", age:20 }

// // Type Allias waxaa loo isticmaalaa inaa lagu keydiyo types-ka soo noqnoqonaayo
// type User = {name: string, age: number}
// const user1 : User = { name: "user", age:20 }
// const user2 : User = { name: "user", age:20 }

// // Union Types: in uu isticmaali karo halki variable multible values
// type StringOrNumber = string | number

// const id : StringOrNumber = 'abc124'

// // Intersection Types(&): in typesyo kala duwan aa isku dartid
// type Named = {name: string}
// type Aged = {age: number}
// type Person = Named & Aged
// const person2: Person = {name: "Hamuuda", age: 22}

// // Nullable Types and Optional Chaining
const user = { profile: {name: "john", age: 50}}
console.log(user?.profile?.age);

// Nullish Coalescing(??) operator: waxaa la isticmaalaa marka rabtid inaa variable u asteesid as Default
const input = null
const output = input ?? "default"

console.log(output);

// interfaces waxaa loo isticmaalaa in lagu qeexo qaabka uu object-ga u ekaanaayo
// laguna kediyo objects si loogu isticmaalo meelo kala duwan
interface User {
    name: string;
    age: number
}

const alice: User = {name: "alice", age: 20 }
// waxyaabaha kale ee loo isticmaali karo waxaa ka mid eh in lagu xiri karo object-kale
interface Admin extends User {
    permissions: string[]
}

const bob: Admin = { name: "bob", age: 20, permissions: ["read", "write"]}

// Readonly interfaces waxaa loo isticmaala objects-ka aan is badalenin
interface configuration {
   readonly apiUrl: string,
    timeOut: number
}

const config : configuration = {
    apiUrl: "http:/test.so",
    timeOut: 5555
}
// console.log(config);

// config.timeOut = 3333

// console.log(config);

// generic = general purpose with out leaving timesafing
// generic wuxuu kuu ogolaanaa inaa sameesato functions, classes and interfaces
// kaasoo ku shaqeenaayo data types kala duwan ayadoo lagu adeegaayo time safety

// without Generic
// function contains(arr: any[], item:any): boolean {
//     return arr.includes(item)
// }








