// function fiveAndGreaterOnly(arr) {
//     // your code here
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// const fiveAndGreaterOnly = [3, 6, 8, 2]

// const a = fiveAndGreaterOnly.filter(function(number) {
//     return number >= 5
// })
// console.log(a)

// function evensOnly(arr) {
//     // your code here
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//   const evensOnly = [3, 6, 8, 2]

// const b = evensOnly.filter(function(number) {
//     if(number % 2 == 0) {
//         return number
//     }
// })
// console.log(b)

// function fiveCharactersOrFewerOnly(arr) {
//     // your code here
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//  const  fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"]

//  const c = fiveCharactersOrFewerOnly.filter(function(string) {
//      if(string.length <= 5) {
//          return string
//      }
//  })

//  console.log(c)

// function peopleWhoBelongToTheIlluminati(arr){
//     // your code here
//   }
//   // test
//   console.log(peopleWhoBelongToTheIlluminati([
//       { name: "Angelina Jolie", member: true },
//       { name: "Eric Jones", member: false },
//       { name: "Paris Hilton", member: true },
//       { name: "Kayne West", member: false },
//       { name: "Bob Ziroll", member: true }
//   ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

//   const peopleWhoBelongToTheIlluminati = [
//     { name: "Angelina Jolie", member: true },
//     { name: "Eric Jones", member: false },
//     { name: "Paris Hilton", member: true },
//     { name: "Kayne West", member: false },
//     { name: "Bob Ziroll", member: true }
// ]

// const d = peopleWhoBelongToTheIlluminati.filter(function(person) {
//     if(person.member == true) {
//         return person.name
//     }
// })

// console.log(d)

// function ofAge(arr){
//     // your code here
//   }
//   // test
//   console.log(ofAge([
//       { name: "Angelina Jolie", age: 80 },
//       { name: "Eric Jones", age: 2 },
//       { name: "Paris Hilton", age: 5 },
//       { name: "Kayne West", age: 16 },
//       { name: "Bob Ziroll", age: 100 }
//   ])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]

// const ofAge = [
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]

// const g = ofAge.filter(function(person) {
//     if(person.age >= 18) {
//         return person.name
//     }
// })
// console.log(g)