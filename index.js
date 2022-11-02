// alert("Instructor")

//Data types // number, string, boolean
//not a number
//not a sentence
// has to be a single word
// not collection of special characters
// if you want to inclide number, alwys use it after alphabets
// just 2 special characters are allowed ==== $ and _

// var numberOfStudents = 0

//PRIMITIVE DATA TYPES
// number, string, boolean, undefined, null

//NON PRIMITIVE DATA TYPES
//Object


//STORE ALL INFO OF AAKASH
// var studentInfo = {
//     name: "Aakash",
//     age: 83,
//     isHeAStudent: false,
//     studentFavNumbers: [1,3,4,21,32,56],
//     privateInfo: [false, "asdas"],
// }

// console.log(studentInfo)


// //arrays
// var primeNumbers = [
//     1,
//     "aviral",
//     true,
//     null, 
//     {
//     name: "Aakash",
//     age: 83,
//     isHeAStudent: false,
//     studentFavNumbers: [1,3,4,21,32,56],
//     },
//     {
//     hasGirlfriend: false
//     },
//     [218123,1243,534,54,67]
// ]
// console.log(typeof(primeNumbers))


// var x = null;
// console.log(x)

// console.log(typeof(numberOfStudents))
// numberOfStudents = "aviral"
// console.log(typeof(numberOfStudents))

// numberOfStudents = false
// console.log(typeof(numberOfStudents))
// console.log(numberOfStudents)

// var numberOfStudents = null;
// console.log(typeof(numberOfStudents))
// console.log(numberOfStudents)


// 1,2,3,4,65,7,100,5999.47236
// "Aviral", "Instroust of ns"
// true/false

// console.log(x)
// typescript
// js is a loosely typed language


//MIX AND MATCH DIFFERENT PRIMITIVE DATA TYPES

// var x = 1;
// var y = "2";

// var result = "$" + 4 + 5;

/// Number(x)
// Number(y)
/// Number(x) -  Number(y)

// console.log(result) // NaN
// console.log(typeof(result))


// var name = 43;


// var name = 65


// x = 231

///////// let const

// let name = 45;
// let name = 323


// const name1 = "aviral"

// name1 = "treww"

// var x = 5;

// var x = 10

// x = "aviral"

// var y = 10;

// var y = "aviral"

// y = 15


// let name = 5;

// let name1 = 5;

// // x = "aviral"


// const x = 5;

// // const x = 10
// x = 6;
// // const x = 10;


//Functionss

// DRY ===> DON'T REPEAT YOURSELF

// var name1 = "aviral"

// var name2 = "newton"

// var result = name1 + name2

// ------------------------------

// var name3 = "Surbhi"
// var name4 = "newton"

// var result1 = name3+ name4
// ------------------------------//
//Functions are first class in javascript
//FUNCTION DECLARATIONS
// function addTwoStrings(x) {
//     console.log('Hi my name is' + x)
// }

// console.log(addTwoStrings)

// addTwoStrings("aviral")
// addTwoStrings("debasis")

// console.log("hi aviral")
// typeof(result)
// alert("aviral")

//FUNCTION EXPRESSIONS
// var calculateString;
// calculateString = 5;



function calculateString (fn1) {
    // console.log(qwertyuiop);
    // qwertyuiop();
    // console.log(fn1)
    return fn1
    // console.log('Hi my name is')
} 

function name2() {
    console.log("aviral")
}
// name2()

// calculateString(name2)

var result = calculateString(name2)

console.log(result)
result()
// calculateString(name2)()




// calculateString("aviral")


//arrow function
//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION




//SCOPE

// var x = "aviral" // global scope

// function name() {
//     alert()
//     if(true) {
//         console.log(x)
//     }
// }


// name()

// alert() // globally scoped

// console.log(console.log("hgasdjkaghs"))

// what is the scope of var?
// var scope is global WRONGGGG
// var scope is functional?????



// var name1 = "aviral" 
// console.log(window.name1)


// function name1() {
//     if(true) {
//         let animalName = "elephant"
//     }
//     console.log(animalName) // elephant
// }


// console.log(animalName)// elephant
// name1()


//VAR
//you can redeclare
//you can redefine 
// VAR is functional scope

//let
//you can't redeclare
// you can redefine
// let is block scope

//const
//you can't redeclare
// you can't redefine
// const is block scope


// prompt('Enter your name')