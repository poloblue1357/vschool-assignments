// function doubleNumbers(arr){
//     return arr.map(function(arr) {
//         return arr * 2
//     }) 
//   }
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//   function stringItUp(arr){
//     return arr.map(function (arr){
//         return arr.toString()
//     })
// }
//     console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// function capitalizeNames(arr){
//     return arr.map(function(arr) {
//         return arr(0).toUppercase() + arr.slice(1)
//     })
//   }
//     console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// function namesOnly(arr){
//         return arr.map(arr.name)
//       }
      
//       console.log(namesOnly([
//           {
//               name: "Angelina Jolie",
//               age: 80
//           },
//           {
//               name: "Eric Jones",
//               age: 2
//           },
//           {
//               name: "Paris Hilton",
//               age: 5
//           },
//           {
//               name: "Kayne West",
//               age: 16
//           },
//           {
//               name: "Bob Ziroll",
//               age: 100
//           }
//       ])); 
//       // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


function makeStrings(arr){
    return arr.map(() => {
        if()
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]