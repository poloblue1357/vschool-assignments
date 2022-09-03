

// function doubleNumbers(arr){
//     // your code here
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// const arr = [2, 5, 100]

// const a = arr.map(function(number) {
//       return number * 2
//   })
// console.log(a)

// function stringItUp(arr){
//     // your code here
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// const b = arr.map(function(number) {
//     return number.toString()
// })
// console.log(b)


// function capitalizeNames(arr){
//     // your code here
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//   const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

//   const c = names.map(function(name) {
//       return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//   })

//   console.log(c)

// function namesOnly(arr){
//     // your code here
//   }
  
// const namesOnly = [
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]
// //   // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// const d = namesOnly.map(function(name) {
//     return name.name
// })
// console.log(d)

// function makeStrings(arr){
//     // your code here
//   }
  
// const makeStrings = [
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//     ] 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

// const e = makeStrings.map(function(string) {
//     if(string.age >= 18) {
//         return string.name + " can go to The Matrix."
//     } else {
//         return string.name + " is underage!!"
//     }
// })
// console.log(e)

// function readyToPutInTheDOM(arr){
//     // your code here
//   }
// const readyToPutInTheDOM = [
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

//   const f = readyToPutInTheDOM.map(function(name) {
//       return "<h1>" + name.name + "</h1>" + "<h2>" + name.age + "</h2>"

//   })
//   console.log(f)