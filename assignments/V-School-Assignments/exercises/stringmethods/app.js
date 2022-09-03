// function capitalizeAndLowerCase (str) {
//     let u = str.toUpperCase();
//     let l = str.toLowerCase();
//     return u + l   
// }

// console.log(capitalizeAndLowerCase("Hello"))

// function funcName (params){
    //code block
    // Understand what return does
// }

// run or call  function
// funcName(arguments)

// console.log only shows answer in console, if you dont console.log it is still running your function you just dont see it

// function findMiddleIndex(str) {
//     return Math.floor(str.length / 2)
// }
// console.log(findMiddleIndex("Hello World"))

// function returnFirstHalf(str) {
//     var middleIndex = Math.floor(str.length / 2);
//     return str.slice(0, middleIndex)
// }
// console.log(returnFirstHalf("Hello"))

// function cAndL (str) {
//     var middleIndex = Math.floor(str.length / 2)
//     var c = str.slice(0, middleIndex).toUpperCase()
//     var l = str.slice(middleIndex).toLowerCase()
//     return c + l
// }
// console.log(cAndL("Hello World I love you"))

// function capitalize(str) {
//     for (i = 0; i < str.length; i++){
//         if (str[i] == " " ) {
//             str.charAt().toUpperCase() + str.slice().toLowerCase()
//         }
//     }
// }
// console.log(capitalize("hey friends! practice practice practice!"))

// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// var firstArray = vegetables.pop()
// console.log(firstArray)

// var secondArray = fruit.shift()
// console.log(secondArray)

// var thirdArray = fruit.indexOf("orange")
// console.log(thirdArray)

// var fourthArray = fruit.push(1)
// console.log(fourthArray)

// var fifthArray = vegetables.length
// console.log(fifthArray)

// var sixthArray = vegetables.push(3)
// console.log(sixthArray)

// var food = fruit.concat(vegetables)
// console.log(food)


// food.splice(4, 2)
// console.log(food)

// var reverseFood = food.reverse()
// console.log(reverseFood)

// var stringFood = reverseFood.join()
// console.log(stringFood)

// function largestNumber (arr) {
//     for( i = 0; i < arr.length; i++) {
//         if (arr[i] )
//     }
// }

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// var blank = []
// function idk () {
// for( i = 0; i < officeItems.length; i++) {
//     if(officeItems[i] === "computer") {
//         blank.push(officeItems)
//     }
// } 
// }
// idk(officeItems)
// console.log(blank.length)
// count = 0
// officeFun = () => {
//     for(i = 0; i < officeItems.length; i++){
//         if(officeItems[i] === 'computer'){
//             count++
//         }
//     }
// }
// officeFun()
// console.log(count)



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
// for( i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
//         console.log("old enough")
//     } else {
//         console.log("not old enough")
//     }
// }

// var arr = [2, 3, 2]
// var count = 0
// for ( i = 0; i < arr.length; i++) {
//     count += arr[i]
// }  if (count % 2 == 0) {
//     console.log("it's off")
// } else {
//     console.log("it's on")
// }

// var array = ([3, 5, 2, 8, 1])
// var newArray = []
// for ( i = 0; i < array.length; i++) {
//     array.sort(() => {
//           array.pop(newArray)
        
//     })
// }
// console.log(newArray)

// var array = ([3, 5, 2, 8, 1])

// function largestNumber() {
//     array.sort()       
//         return array.pop()
// }
// console.log(largestNumber(array))


// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")

// var lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]

// const newArray =  lettersWithStrings.filter((strings) => {
//     return strings.includes("!")
// })

// console.log(newArray)

// function isDivisible (num1, num2) {
//     if( num1 % num2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isDivisible(4, 2))


// Most important Array methods --> must memorize
// push
// pop 
// splice 
// slice
// join

// higher order methods

// map
// filter 


// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// vegetables.pop() 
// console.log(vegetables)

// fruit.shift()
// console.log(fruit)

// const orangeIndex = fruit.indexOf("orange")
// console.log(orangeIndex)

// fruit.push(orangeIndex)
// console.log(fruit)

// const vegetablesLength = vegetables.length
// console.log(vegetablesLength)

// vegetables.push(vegetablesLength)
// console.log(vegetables)

// var food = fruit.concat(vegetables)
// console.log(food)

// food.splice(4, 2)
// console.log(food)

// food.reverse()
// console.log(food)

// let foods = food.join(", ")
// console.log(foods)

// tolowercase touppercase slice concat

// to make a capitalized version of any String

//  var name = "dAn" 
//  function newName () {
//     return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
//  }
// console.log(newName(name))

// const actionGenre = movies.filter(function(movie) {
//     if( movie.genre == "action") {
//         return movie
//     }
// })

// const actionGenre = movies.filter(movie => {
//     if( movie.genre == "action") {
//         return movie
//     }
// })