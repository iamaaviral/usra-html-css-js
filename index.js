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
// addTwoStrings()
// function addTwoStrings(x) {
//     console.log('Hi my name is' + x)
// }

// addTwoStrings()


// console.log(addTwoStrings)

// addTwoStrings("aviral")
// addTwoStrings("debasis")

// console.log("hi aviral")
// typeof(result)
// alert("aviral")

//FUNCTION EXPRESSIONS
// var calculateString;
// calculateString()
//  var calculateString = function (x) {
//      console.log('Hi my name is' + x)
//  };



// function calculateString (fn1) {
//     // console.log(qwertyuiop);
//     // qwertyuiop();
//     // console.log(fn1)
//     return fn1
//     // console.log('Hi my name is')
// } 

// function name2() {
//     console.log("aviral")
// }
// name2()

// calculateString(name2)

// calculateString(name2) //???

// console.log(result)
// result()
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
//var is hoisted


//let
//you can't redeclare
// you can redefine
// let is block scope
// let is not hoisted

//const
//you can't redeclare
// you can't redefine
// const is block scope
//const is not hoisted

// alert("aviral")
// var student = "Nitin"

// console.log(student)
// console.log(window.student)

// var animal ="elephant"
// console.log(animal)

// prompt('Enter your name')


//EXECTUION CONTEXT
// var student = "Nilesh"
// const student = "0"
// function getName() {
//     const student = "Nimisha";
//         function getNumber() {
//             const student = "Sneha"
//             console.log(student)   //??
//         }
//    getNumber()
// }

// getName()


//EXECTUION CONTEXT
// Hoisting ===> 
// console.log(a)

// let a = "aviral";

// console.log(a)


// console.log(student) //??error
// console.log(student + animal)
// function getName() {
//     // var student = "Nimisha";
//         function getNumber() {
//             // var student = "Sneha"
//             // console.log(student)   //??
//         }
//    getNumber()
// }

// getName()
// let student;
// console.log(animal)

// var animal = "elephant"

// console.log(student)
// console.log(animal)

// x()
// function x() {
//     console.log('Hi i am function declaration')
// }
// x()

// var y;
// // y()
// y = function () {
//     console.log('Hi i am function expression')
// }
// y();

// loops and conditions
// for(let i =0 ; i<10; i++) {
//     console.log(i)
// }



//OPERATORS
// + , - * / 

//ASSIGNMENT OPERATOR
// let x = 1


//compariosn operator
// == compares values
// === compares values as well as data type
// !=
// >, < , >=, <=
// (10>5) ? (3>2) ? console.log("this") : console.log("sdajkh") : consoe.log("no")
// false <= true

//logocal operator
// &&, ||

//searches for first false condition
// return the last condition
// 5<2 && 3>1 && console.log("aviral")

//searches for first true condition
// return the last one
// ||
// (5>10) && console.log("yess")



// ---------------------------------------new cLASS
// var x;
// var y;
// var getSum;
// console.log(x)
// console.log(b)
// x = 10;
// y =20;

// getSum = function() {
//     console.log(x+y)
// }

//100lines
// getSum(); // undefined

// IIFE === immediately invoked function expression
// var num1 = 10;
// var num2 = 20;

// var result = (function(x,y) {
//    return x+y
// }(num1,num2))


// console.log(result)


// var student  = "Nilesh";


// 2 things
//1. variable intialization; var name;
///2. variable assignment; name = 13;

// let student = "Nilesh"

// function getAnswer() {
//     console.log(student) //?? error
//     student = "Shivani";
//     console.log(student) //?? "Shivani";
// }
// getAnswer()
// getAnswer()
// console.log(sameer)
// let student2; //Temporal dead zone
// console.log(student2) //?? error
// student2 = "Shivani";
// (function() {
//     var student;
//     console.log(student) //undeined
//     student = "NILESH";
//     console.log(student) // Nilesh
// }())


// let car1 = "Tesla";

// (function() {
//     car3 = "volvo"
//     console.log(car3);  //1
//     var car2 = "Creta"
//     car2 ="audi"
//     console.log(car1) //2
// }())

// // console.log(car2) //3
// console.log(car3) //4
// // var car1 ="bmw"

// // animal = "elephant"

// console.log(abc)
// let abc = 10

//??

// Number("23aviral") ==== > ?

// =========================dom(Document object modal) mainpulation===================

// JS FIDDLE CODE LINK ====> https://jsfiddle.net/srivastavaaviral1/hxuon4qm/132/

//Select any element // function predefined
//add any new elemt 
//edit any elemet
//delete any element

// document.title = "Aviral's website"

//select elementby id

// let quote = "Aviral's  friend said something"


//getElementsByTagName
//getElementsByClassName
//getElementById
//querySelector
//querySelectorAll


// document.getElementById("main-header").style.color = "red"
// header.style.color = "red"

// let li = document.querySelectorAll(".list-group-item")
// console.log(li[0])

// let student = {
//     name: "aviral"
// } 
// let x1 = {} 
// console.log(x1)

// let x = new Object()
// console.log(x)
// let student = {
//     name: "aviral",
//     age: 21,
//     getName() {
//         console.log("aviral")
//     },
//     "get age": false,
//     physicalFeature: 10,
// }


// student ? student.physicalFeature? console.log(student.physicalFeature.hairColor): null : null


// student && student.physicalFeature && console.log(student.physicalFeature.hairColor)

//OPTIONAL CHAINING
// console.log(student.physicalFeature.hairColor)

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

// console.log(student)
// console.log(student["get age"])
// console.log(student.name)
// console.log(student.age)
// console.log(student.physicalFeatures.hairColor)
// student.getName()

// student.isNewtonSchoolStudent = true;
//pass by referance and pass by value
// console.log(student)

// delete(student.physicalFeatures.hairColor)
// console.log(student)

// let stduent = "Tauseef"

// console.log(stduent);

// student = "Sameer"
// console.log(student)




// let str1 ="aviral "

// str1 =====> x
// str2 ======> y
// let str2 = str1;

// console.log('1.', str1)
// console.log('2.',str2)

// str1 = ""

// console.log('3.',str1)
// console.log('4.',str2)


//obj1 ========> x <======== obj2
//Pass by referance
// let obj1 = {
//     name: "surbhi"
// }

// let obj2 = obj1;

// console.log('1.', obj1)
// console.log('2.',obj2)

// obj1.name = "nilesh"

// obj1 = {
//     name: "nilesh"
// }

// console.log('3.',obj1)
// console.log('4.',obj2)


// can my variable name be var get stduent


// return {
//     email: _email,
//     password: _password
// }


// let obj1 = {
//     name: "Jeel"
// }

// let obj2 = {
//     name: "Dhanesh",
//     age: 80,
//     hairColor: "blue"
// }

//Object.assign

// let newObj = obj1;
// let newObject = Object.assign({}, obj2, obj1, {hasGirlfriend: false})
//Object.assign(target, ...sources)

// obj1.hairColor = "red"
// console.log(obj1)
// console.log(newObject)


// spread syntax
// let newObject = {...obj1, ...obj2, hasGirlfriend: false, hasCar: "tesla"}

// console.log(newObject)


// let obj2 = obj1;
// let obj2 = {
//     name: "Jeel"
//     .
//     .
// }


// const team = "India"

// team = "England"
//variavlr was made at x location
// let obj1 =

//this variable was made at y location
// let num = 456

// var worldCup =  {
//     matches: 41,
//     venue: "Australia",
//     squad: {
//         teamA: ["India", "Pakistan", "Netherland"],
//         teamB: ["Australia", "England", "Namibia"]
//     }
// } 

// Object.freeze(worldCup)
// Object.freeze(worldCup.squad)

// worldCup.squad.teamA = ["India", "Pakistan", "Bangladesh"]
// console.log(worldCup)

// worldCup = {
//     djhkf
// }
// worldCup = num

//ARRAYYYYYYYYYYYYYYYYYYYYYYSSSSSSS

// let obj = {
//     name: "tausheef",
//     age: 99
// }

// obj.school = "TPPS"
// delete obj.name
// console.log(obj)
// console.log(Object.keys(obj).length)

// let arr = [1,2,3,3,54, "Tausheef", false];

// console.log(arr[2])
// let arr1 = arr;

// arr[0] = "Aakash"
// 
// console.log(arr1)


// arr[7] = "Shivani"
// arr.push("Shivani")
// arr.push("Shivani")
// arr.pop()
// arr.pop()
// arr.pop()

//SEE IT YOURSELF
//shift
//unshift

// delete arr[4];
// console.log(arr[4])
// console.log(arr.length)

//splice ====> can do everything. insert, remove or replace
// splice returns the array of removed elements
//arr.splice(index, number of elemets, ...extra elents)
// let newFruits = ["papaya", "kiwi"]
// var fruits = ["apple", "banana", "grapes", "mango", "litchi"]

// var result = fruits.splice(0,0, ...newFruits)
// console.log(result)
// console.log(fruits)
// console.log(fruits.length)


//slice
// var arr = [1,52,76,89]
// var result1 = arr.slice(0,1)
// result1
// // [1]
// arr
// (4) [1, 52, 76, 89]
// var result2 = arr.splice(0,1)
// result2
// // [1]
// arr
// (3) [52, 76, 89]
//  arr.splice(0,1)
// // [52]


// for loop;

// var arr = [11,22,33,44,55,66,77]

// let result = [];
// for(let i=0; i<arr.length; i++) {
//         console.log(arr[i], i)
// }
// console.log(result)

// MAP

// function mapFn(element, index) {
//     console.log(element, index)
// }

// let result1 = arr.map(function(element, index) {
//        if(element % 2 === 0) {
//             return element*2
//        } else {
//         return element
//        }
// })

// [11, 44, 3]
// console.log(arr)
// console.log(result1)
//Arrow function
// arr.map((element,index) => console.log(element, index))
//filter
// function filterFn(element, index) {
//     if(element%2 === 0) {
//        return element
//     }
// }

// let result  = [elem1,elem2m  ]
// let result2 = arr.filter(filterFn)
//Arrow function
// console.log(arr.filter((element,index) => element%2 === 0))

// console.log(result2)

// function getName(_sameer) {
//     return (_sameer*2)
// }

// let result3 = []

// for(let i=0; i<5; i++) {
//     var num = getName(i)
//     result3.push(num)
// }

// console.log(result3)


//Reverse in array
// let arr = ["aviral", "Shivani", "Sarang", "Sameer"]
// let arr1 = [999,334,1,234,54,12]

// var result = arr1.reverse()
// console.log(result)


//SORTING IN JS
// let arr = [15,27,34,69,11,22,7]
// var result = arr.sort(function(a,b) {
//    return b-a
// }) //nlonN
// var result = arr.sort((x,y) => y-x) //nlonN
// console.log(result)


// let arr2 = ["aviral", "Shivani", "Sarang", "Sameer"]
// var result = arr.sort() //nlonN

// Array, objects

// 
// var saying = "early to bed, early to rise"

// console.log(saying.split(""))




// ==========Interview questions============================

//I have a string
//write a function to reverse that string????

//string 
//arrays in js are called as iterables

// function reverse(s) {
//     //write your code here
//     // let s1 = ""

//     // for(let i=s.length-1; i>=0; i--) {
//     //     s1 = s1 + s[i]
//     // }

//     // console.log(s1)
//     // console.log(s1.length)
//     // console.log(s.reverse())
//     console.log(s.split("").reverse().join(""))
// }

// console.dir([].reverse())
// console.dir("asdas")
// reverse("Tauseef") // feesuat

//dog
//god

// act tac

// [0,0,0]
// function checkAnagrams(s1,s2) {
//     //write code here
//     // if(s1.length !== s2.length) return false
//    if(s1.split("").sort().join("") ===  s2.split("").sort().join("")) {
//     console.log("Anagram")
//    } else {
//         console.log("noit anagram")
//    }
// }


// checkAnagrams("dig", "igdqwertyuio")
// checkAnagrams("actt", "ttac")
// checkAnagrams("actor", "tractor")


// console.log(typeof())

// let x = [2,3,5,"21312",1]

// console.log(Array.isArray(x))

// //flaaten an array
// let arr = [1,2,3, [4,5], [8,9], 10,11]
// result = [1,2,3,4,5,8,9,10,11 ]
// // console.log(arr.flat())

// [1,2,3,4,5,8,9,10,11]


// ==========**********************============================


// for,map, 

//forEach, for in, for of


// let arr1 = ["A", "D", "C", "Z"]
// let result = arr1.map(function(elem) {
//     return elem + "X"
// })
// console.log(result)
// console.log(arr1)



// var arr2 = ["A", "D", "C", "Z"]
// let result2 = []
// let result1 = arr2.forEach(function(elem) {
//     result2.push(elem + "x")
// })

// console.log(result2)
// console.log(result1)
// console.log(arr2)



// let obj = {}
// obj.name = "aviral"
// obj.age = 80

// console.log(obj)

// var arr2 = ["A", "D", "C", "Z"]
// arr2.name = "aviral"
// arr2.age = 80

// arr2[10] = 100
// arr2.push("Y")
// console.log(arr2.age)

// console.log(arr2.length)


//Objects
// for(let alpha in obj ) {
//     console.log(obj[alpha])
// }

//Arrays
// for(let alpha of obj ) {
//     console.log(alpha)
// }


//Functions

//function expressions
//function decalrations
//hoisting
//scopes
//iife- annonyomous
//js as first class

// console.log(String)
//s1 is parameter
//rest paramenter
// function sum(s1,...arr) {
//     console.log(s1)
//     console.log(Array.isArray(arr))
//     // for(let i = 0; i<x.length; i++) {
//     //         console.log(x[i])
//     // }
// }

// sum(90,150, 30,20, 10) // 30 is argument

//Arrow function
//curry function

//Anagrams?????? better way

//s1 = "madama"
//s2 = "daammm"

// {
//     m: 0,
//     a: 1,
//     d: 0,
// }

// function checkAnagrams(s1,s2) {
//     if(s1.length !== s2.length) return false

//     let letterCount = {};


//     for(let letter of s1) {
//         (letterCount[letter] === undefined) ? letterCount[letter] = 1 : letterCount[letter]++
//     }

//     for(let letter of s2) {
//         if(letterCount[letter] === undefined || letterCount[letter] < 1) {
//             return false
//         }
//         letterCount[letter]--
//     }
    
//     return true
// }

// let letterCount
// console.log(checkAnagrams("madam", "daamm"))
// console.log(checkAnagrams("jacky", "tacky"))



// function sum(...restOfTheValues) {
//     let total = 0;
//     // for(let value of restOfTheValues) {
//     //     total = total + value
//     // }

//     for( let i=0; i<restOfTheValues.length; i++) {
//         total = total + restOfTheValues[i]
//     }
//     console.log(total)
// }

// sum(1,2)
// sum(1,2,3,4)

// ["aviral", "Sarang"].includes("aviral")

// function sum2(y) {
//     return y
// }

// // sum2()
// function sum1(x) {
//     return sum2
// }

// console.log(result)
// let result1 = result(10)


// console.log(result1)
// function y() {
//     return "Tauseef"
// }

// function x() {
//     return y
// }

// console.log(x)
// let res = x();
// console.log(res())

// console.log(5);

// let x = 5;
// console.log(x)


//CLOSURES =====

// name ka scope was only function x
// how am i geeting this in the scope of function y????
// closures are a way js uses to access outer scope variable in its inner scope

// scope for age variable -s function x
// y is different scope



// function x() {
//      let name = "aviral"
//      let age = 80;
//      let isInstructor = false
//      function y() {
//         function z() {
//                 console.log()
//         }
//         console.dir(z)
//         z()
//      }
//     //  console.log(y)
//     //  console.dir()
   
// }
// x()


// function x() {
//     return function y() {
//         return function z() {
//             return 10
//         }
//     }
// }

// let result = x()()();
// console.log(result)
// let newResult = result()
// console.log(newResult)

// function sum(x) {
//     let sum = x;
//    return function resultFn(y) {
//     if(arguments.length) {
//         sum = sum+y;
//         return resultFn
//     }
//        return  sum
//    }
// }

// console.log(sum(10)())
// console.log(sum(10)(20)())
// console.log(sum(10)(20)(30)())
// console.log(sum(10)(20)(30)(11)(16)(15)()


// =============================================================

// var student1 = {
//     name: "Sarang",
//     age: 65
// }

// var student2 = {
//     name: "Sameer",
//     age: 102
// }

// var student3 = {
//     name: "Surbhi",
//     age: 70
// }

//CONSTRUCTORS?????

// function createStudentFactory(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }
// console.log(createStudentFactory("Sarang", 65))
// console.log(createStudentFactory("Sameer", 70))[]

// let obj1 = new Object()
// let arr1 = new Array()
// let str1 = new String("aviral")

// console.log(arr1.indexOf())


// let CreateStudentFactory = function(firstName,lastName = "", age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age

//     this.getFullName = function(x) {
//         return this
//     }
// }

// let student1 = new CreateStudentFactory("Sarang","Salame", 65)
// let student2 = new CreateStudentFactory("Sameer", "Agarwal", 70)
// let student3 = new CreateStudentFactory("Surbhi", "Chawla", 70)


// let CreateStudentFactory = function(firstName,lastName = "", age) {
//     var firstName = firstName
//     var lastName = lastName
//     this.firstName = firstName
// }

// let student1 = new CreateStudentFactory("Sarang","Salame", 65)

// console.log(student1)


// var name = ""


// var result = student1.getSection({})
// console.log(student3.getFullName())
// console.log(student1.getFullName())
// console.log(student2.getFullName())

// console.log(student3)

//templete literals
// var a = "sarang"
// var b = "Rahman"

// console.log(`my first name is ${2>3 ? a : "Sameer"} and last name is ${b}`)

//what is this in js??
//value of this is always an object

// console.log(this)

// let student = {
//     name: "aviral",
//     getName: function() {
//         console.log(this)
//     },
//     characters: {
//         color: "black",
//         age: 90,
//         favcAR: "ALTO",
//         getCharacters: function() {
//             console.log(this)
//         }
//     }

// }

// student.getName()
// student.characters.getCharacters()


// function getName() {
//     var student = {
//         name: "aviral"
//     }

//     return this
// }

//  console.log(getName()) //???

// typeof("aviral")
// this  === window

//create a very simple calculator, sum and substract

// let obj = {
//     value: 0,
//     add: function(x) {
//         this.value = this.value + x
//         return this
//     },
//     substract: function(x) {
//         this.value =  this.value - x
//         return this
//     }
// }

// console.log(obj.add(5))
// obj.add(5).value //5
// obj.add(5).substract(5).add(3).substract(15).add(10).value
// console.log( obj.add(5).substract(5).add(3).substract(15).add(10).value);

// console.log(obj.add(5));

// obj.substract(5).value //-5
// obj.add(5).substract(5).add(3).value // 3
// obj.add(5).substract(5).add(3).substract(15).add(10).value //-2


// obj.value


//global This
// this inside object
// this in constructor

//this inside a function
//call, apply, bind


// let carProps = {
//     name: "Nano",
//     color: "red",
//     getCarName() {
//         return this
//     }
// }
// carProps.getCarName()

// let bikeProps = {
//     mileage: 30,
//     automatic: true
// }

// function car(name, age) {
//     console.log(name,age)
//     return this
// }

// var result1 = car("maruti", 30)
// var result = car.call(carProps, "maruti", 30)
// var result =  car( "maruti", 30)
// var result = car.apply(carProps, ["maruti", 30])


///////////////////BIND/////////////

// var newCarFunction = car.bind(carProps)

// console.log(car("x", 30))

// console.log(car.call(bikeProps, "x", 30))

// console.log(newCarFunction("x", 30))
// console.log(newCarFn)
//100 lines of code
// car.bind(carProps)("nano", 83789)
// console.log(newCarFn("nano", 83789))
// console.log(result) //?
// console.log(newCarFunction("x", 30))
// console.log(newCarFunction("x", 30))
// console.log(newCarFunction("x", 30))


// let obj1 = {
//     name: "aviral"
// }

// function x() {
//     // return this
//     function y() {
//         return this
//     }
//     y.call(obj1)
// }


// var newX = x.bind(obj1)

// console.log(x()) //?


//arrow fucnction ??


// function getSum(x,y) {

//     if(!x) {
//         x = 0
//     } 
//     if(!y) {
//         y = 0
//     }

//     return x+y
// }

// console.log(getSum(5, 3))


// var getNameArrow = () => {
    
//     if(!x) {
//         x = 0
//     } 
//     if(!y) {
//         y = 0
//     }

//     return x+y
// }

// getNameArrow()

// var arr = [1,2,4,5646,2,3413,6]



// arr.filter((eachArrValue) => eachArrValue> 3)

//in case of normal functions the value of this is basically the object
//that called that function


//in case of arrow functions this keyword is basically the  
//object that defined the arrow function

// var _email = "xyz.name.com"

// console.log(window._email)

// function x() {
//     return this
// }


// console.log(x())

// let obj2 = {
//     name: "Sameer",
//     age: 90
// }

// let obj1 = {
//     name: "aviral",
//     age: 80,
//     getName: function() {
//         return this
//     },
//     getAge: function() {
//         return this
//     }
// }

// console.log(obj1.getAge.call(obj2))

// console.log(obj1.getName())

// console.log(obj1.getAge())



// function MyCar (color, brand, convertable) {
//     this.brand = brand
//     this.convertable = convertable
//     this.getBrand = function() {
//         return this.brand
//     }
//     var color = color
//     // var = function() {
//     //         return getConvertable convertable
//     // }
// }

// var arr2 = []
// arr2.length
// 
// console.log(car1.getBrand())
// console.log(car1.getConvertable())

// var arr2 = new MyArray([10,121,21,45,12,12])

// console.log(arr1.getLength())
// console.log(arr2.getLength())

// var car1 = new MyCar("red", "tata", false)
// console.log(car1.getConvertable())

//PROTYPE

// MyCar.prototype.getConvertable = function() {
//     return "Hi i am convertable"
// }

// var car1 = new MyCar("red", "tata", false)
// console.log(car1.getBrand())
// console.log(car1.getConvertable())

// Array.prototype.getMyName = function() {
//     console.log(this)
//     // return "aviral"
// }

// [ [prototype]] =====> __proto__
// var arr = [1,2,3,4];
// var arr = [21312,13123,24235,346,45]
// arr.__proto__= null
// var obj = {
//     name: "aviral"
// }

// obj.__proto__ = null

// console.dir(Object.keys(obj))
// console.log(typeof(arr))
// console.dir(arr.__proto__)
// console.dir(arr.__proto__.__proto__)
// console.dir(arr.__proto__.__proto__.__proto__)
// console.dir(arr.__proto__.__proto__.__proto__.__proto__)

// console.log(arr2.getMyName())
// console.log(arr.valueOf())
//what so ever you create using protoype
//gets vreated in constructors proto
// Array.prototype.map = function() {
//     return "aviral"
// }
// console.dir(arr.getMyName())
// console.log(arr.length)
// console.log(arr.getMyName())

//map??? 
//polyfill??

//function fn(eme, index) {

// }

// [1,2,3,4,5].map((element, index) => element*2)
// var x= function() {}

// Array.prototype.newMap = function(_fn) {
//     let passedArray = this
//     let result = [];
//     for(let i=0 ; i<passedArray.length; i++) {
//           let newArrayElement = _fn(passedArray[i])
//           result.push(newArrayElement)
//     }
//     return result
// }



// var arr1 = [1,2,3,4,5,6]

// var arr2 = [123,3243,5456,5867,231]
// console.log(arr1.newMap((elem) => elem *2))

// console.log(arr2.newMap((elem) => elem*3))


// var x = arr1.newMap(function(element) {
//     return  element/2
// })

// console.log(x)

// String.prototype.newLength = function() {
//         return this.length + 1
// }


// var name1 = "aviral"
// var name2 = "venketash prasahd yadav"
// console.log(name2.newLength())

// ==================================================

// Arrow function 

//in case of normal functions the value of this is basically the object
//that called that function

//in case of arrow functions this keyword is basically the  
//object that defined the arrow function

// console.log(this)
// console.log(window.speed)
// var bus = {
//     speed: 150
// }

// var bus = {
//     name: "Rajesh travels"
// }
// var car = {
//     speed: 100,
//     parts: {
//         wheels: "mrf",
//         body: "steel",
//         getSpeedLimit: function() {
//             console.log(this)
//             // console.log(this.speed)
//         }
//     },
//     getSpeed: (x) => {
//          console.log(this)
//         // console.log(this.speed)
//     },
//     getSpeedLimit() {
//         console.log(this) //?
//     }
// }
// //blaock scope ===> if, while, do while, for loop, functionscope
// car.parts.getSpeedLimit()
// car.getSpeed(null)


// function displayName() {
//     console.log(name1)
//     console.log(this)
// }
//REDUCEEEE

// ===========================THIS================
//Bitwise operator
//garbage collection


//=========================???????=======================

//everything is pure js....
//dom bom... js with html and css


// this in normal fn????
// call bind apply
// let aviralRoom = {
//     table: "aviral table"
// }

// let mainRoom = {
//     table: "main table"
// }
// //this ==
// function cleanTable(item) {
//     console.log(this) //?

//     // function innerFn() {
//     //     // console.log(this)
//     //     console.log(`I am cleaning ${valueOfThis.table} using ${item}` ) //?
//     // }

//      let innerFn = () => {
//         // console.log(this)
//         console.log(`I am cleaning ${this.table} using ${item}` ) //?
//     }
//     innerFn()
// }

// cleanTable("soap")


// let cleanTable = (...x)  => {
//     console.log(arguments[0])
// }

// cleanTable("100", "200", "300")

// function MyCar (color, brand, convertable) {
//     this.brand = brand
//     this.convertable = convertable
//     this.getBrand = function() {
//         return this.brand
//     }
//      this.color = color
//     // var = function() {
//     //         return getConvertable convertable
//     // }
// }

// MyCar.prototype.getConvertable = function() {
//     console.log(this)
// }

// let cr1 = new MyCar("red", "tata", true)
// let cr2 = new MyCar("blue", "maruti", false)

// cr1.getConvertable()
// cr2.getConvertable()


// ============================CLASSESSSS==================

// function Male(occupation, hobby) {
//     this.occupation = occupation;
//     this.hobby = hobby
// }

// let sarang = new Male('developer', 'sleep')
// console.log(sarang)
// function Person(name, age, hairColor) {
//     this.name = name;
//     this.age = age;
//     this.hairColor = hairColor
// }

// Person.prototype.sayName = function() {
//     console.log(`my name is ${this.name}`)
// }




// function Male(occupation, hobby, name, age, hairColor) {
//         Person.call(this,name, age, hairColor )
//         this.occupation = occupation;
//         this.hobby = hobby
// }

// let nilesh = new Male('developer', 'sleep', 'nilesh', 90, 'green')
// // console.log(nilesh.sayName())


// //attach methods also
// Male.prototype = Object.create(Person.prototype);
// let dhanesh = new Male('gamer', 'playing', 'dhanesh', 7, 'black')
// console.log(dhanesh.sayName())


//es6 came 2015

//classes


// class Person {
//     constructor(name, age,hairColor ) {
//     this.name = name;
//     this.age = age;
//     this.hairColor = hairColor
//     }
//     sayName() {
//         console.log(`my name is ${this.name}`)
//     }
// }
// let nilesh = new Person('nilesh', 90, 'green')

// // console.log(nilesh.sayName())


// class Male extends Person{
//     constructor(name,age,hairColor, occupation, hobby) {
//         super(name,age,hairColor)
//         this.occupation = occupation
//         this.hobby = hobby
//     }
// }


// ==============================????????=====================


// JS IS SINGLE THREADED LANGUAGE?????
// function AbortController() {
//     //
// }


// function xyz() {
//     //thousand line of code
// return 
// }

// xyz();

// AbortController();



//api calls
// asyc js
// var x = 

// console.log('aviral')

// alert('in between')

// console.log('Sameer')

// var person;

//api call to age person data

// person = {age: 40}

// console.log(person.age)
//async js

// function x( ) {
// }



///////////////////////////////MATH OBJECT//////////////
/////////////////////////////////DATE OBJECT/////////////////////

// 1/1000

// let date = new Date(1000)
//let date = new Date('1995-07-10')
// let date = new Date(year,month,date,hour,minute,second,ms);

// 24*3600*1000

// let date1 = new Date(28*3600*1000)
// let date2 = new Date('1945-06-12')
// let date3 = new Date(1992,11);

// // jan=== 0;

// console.log(date2)
// console.log(date2.getFullYear())
// console.log(date2.getMonth())
// console.log(date2.getDate())
// console.log(date2.getHours())
// console.log(date2.getMinutes())
// console.log(date2.getSeconds())
// console.log(date2.getMilliseconds())
// console.log(date2.getDay())

// console.log(date3)

// let date = new Date(2016, 1, 28)

// console.log(date.getDate() + 2)

// console.log(date)

// date.setDate(date.getDate() + 2)
// console.log(date)
// date.getDate()


// let start = new Date();
// console.log(start)

// for(let i= 0; i<100000; i++) {
//     let x = 0;
//     x= x+i
// }

// let end =  new Date();
// console.log(end)


// console.log(end-start)



// '////////////////////////////////////////////////////'

// async js


// console.log("1")

// //async code
// var x;
// x = fetch('askdj')
// console.log(x.name) //fatt gaya

// console.log('4')

// console.log("1");

// setTimeout(() => {
//     console.log("6")
// }, 5000)

// setTimeout(() => {
//     console.log("5")
// }, 2000)


// function x() {
//     console.log("2")
//     console.log("3")
//     console.log("4")
// }
// x()


// console.log("1.");

// function x() {
//     console.log("2.")
//     console.log("3")
// }

// x()

// console.log("4.");


//////////////////////////////////////////////////
// console.log("1")
// function x() {
//     console.log("2")
//     function y() {
//         console.log("3")
//     }
//     y()
// }
// x()
// console.log("4")



// console.log("1");
// function x() {
//     console.log("2")
//     console.log("4")
//     console.log("5")
// }
// x()

/////////////
