// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// let x = []

// for( i = 0; i < officeItems.length; i++) {
//     if(officeItems[i] == "computer") {
//         x.push([i])
//     } 
// }
// console.log(x.length)
// console.log(x)

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ] 

//   for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road.")
//     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Mad Max Fury Road.")
//     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough. Don't let him in!")
//     } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough. Don't let her in!")
//   }
// }

let x = [2, 5, 435, 4, 3] // "The light is on"
let y = [1, 1, 1, 1, 3]   // "The light is on"
let z = [9, 3, 4, 2]    // "The light is off"

let count = 0

for(i = 0; i < z.length; i++) {
    count += z[i]
}
console.log(count)

if(count % 2 == 0) {
    console.log("The light is off.")
} else {
    console.log("The light is on.")
}

// let a = x.reduce((a, b) => a + b, 0)
//     console.log(a)
// if(a % 2 !== 0) {
//     console.log("The light is on!")
// } else {
//     console.log("The light is off.")
// }

