"use strict"

// console.log(mahmoud)
// name = "ali"
// console.log(name)

// console.log(name)
// name=  "ali"
// hoisting 

// console.log(x)

// sayHello()
// // var x = 10

// function sayHello(){
//     console.log("Hello World")
// }


// console.log(name)

// name = "ali"
// name  = "mahmoud"


// var name  = "omar"
// name = "ali"

// console.log(name)

// let myName = "ali"
// myName = "Omar"

// console.log(myName)

// const myName = "ali"
// myName = "omar"

// const friends = ["ahmed" , "sameh" , "omar"]
// friends.push("hossam")

// console.log(friends)

// let x = "ahmed"
// x[0] = "b"
// console.log(x)

// let x = "ahmed"

// x.toUpperCase()

// console.log(x)

// deep copy 

// let x = "ahmed"


// x = "omar"
// let y = x 

// console.log(x)
// console.log(y)

// shallow copy
// let x = [1 , 2 , 3]

// let y = x 

// x.push(6) 

// console.log(x)
// console.log(y)

// const x = [1 , 2 , 3]

// x = [1,2,3,4]
// x.push(4)

// console.log(x)

// console.log([] == [])

// console.log("" == "")

// let y = [1 , 2 , 3]

// console.log(x === y)
// console.log(JSON.stringify(x) === JSON.stringify(y))

// let y = x 

// console.log(x === y)
// let x = [1 , 2 , 3 , 4 , 5 ,6]
// let x = ["ahmed" , 'sameh' , "hossam" , "ragab" , "maher" , "omar" , "soaad"]
// // console.log(x.slice(x.length - 2 , x.length))
// console.log(x.slice())
// deep copy
// let x = [1 , 2 , 3]
// let y =x.slice()
// x.push(4)
// console.log(x)
// console.log(y)



// console.log(5 > 4 && 6 > 7 && 8 > 7 && 100 > 90)

// console.log(Boolean(0))
// console.log(Boolean(-0))
// console.log(Boolean(""))
// console.log(Boolean(NaN))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(false))
// console.log(Boolean(-1))
// console.log(Boolean([]))
// console.log(Boolean(" "))


// short circuit 
// zero and don't care
// return first false value or last true value 

// console.log(6 && 4 && null && 8)

// let age = Number(prompt("Please, enter your age : "))

// // if (age > 18) { 
// //     console.log("Welcome to your system")
// // }

// age > 18 && console.log("Welcome to your system")
// || return first true value of last false value 


// let name = prompt("please enter your name : ")

// console.log("hello" , name || "World" )

// let info = {
//     "name" : "ahmed" , 
//     age : 13 , 
//     "address" : 'Cairo'
// }

// let info1 = info 

// info["gpa"] = 3.6 

// console.log(info)
// console.log(info1)

// let x = "ahmed"
// let y = x 
// x = "omar"

// console.log(x)
// console.log(y)

// console.log(x)
// let x = 10



// function sayHello() {
//     console.log("Hello World")
// }

// let sayHello = function(){
//         console.log("Hello World")

// }

// sayHello()

// let userName = prompt("Please, enter your name : ")
// let age = Number(prompt("Please, enter your age : "))
// let address = prompt("Please, enter your address : ")

// console.log("welcome to your system " + userName + " your age is " + age + " your address is : " + address )
// console.log(`welcome to your system ${userName} your age is ${age} your address is :  ${address}` )

// let age = Number(prompt("Please, enter your age : "))

// if (age > 18) {
//     console.log("You are adult ")
// }else {
//     console.log("You are child")
// }

// unary operator , ++ , -- 
// binary operator , 
// ternary operator
// age > 18 ? console.log("You are adult ") :  console.log("You are child")

// let message = `you are ${age > 18 ? "Adult" : "Child"}`

// let message = age > 18 ? "you are adult" : "you are child"


// for (let i = 0 ; i < x.length ; i++) {
//     let val = x[i]
//     console.log(val)
// }

// for (let val of x) {
//     console.log(val)
// }

// x.forEach((val)=>{
// console.log(val)
// })
// let x = [1 , 2 , 3 , 4 , 5 ,6 ]

// let y = x.filter((val)=>{
//         if (val % 2 ==0 ){
//             return true
//         }else {
//             return false
//         }
// })
// console.log(y)
let q = prompt("Please, enter your query : ")
let x = ["aHmed" , 'sameh' , "hossam" , "ragab" , "maher" , "omar" , "soaad"]

let y = x.filter((val)=>{
    if (val.toLocaleLowerCase().includes(q.toLocaleLowerCase())){
        return true
    }else{ 
        return false
    }
})

console.log(y)