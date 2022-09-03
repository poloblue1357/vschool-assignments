// function total(arr) {
//     // your code here
//  }
 
//  console.log(total([1,2,3])); // 6

//  const total = [1, 2, 3]

// const a = total.reduce(function(final, num) {
//     final += num
//     return final
// }, 0)
// console.log(a)

// const stringConcat = [1,2,3]

// const b = stringConcat.reduce(function(final, string) {
//     final += string
//     return final
// }, "")
// console.log(b)


// const b = stringConcat.reduce( (a, b) => a + b, "")
// console.log(b)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// const c = voters.reduce(function(final, voter) {
//     if(voter.voted) {
//         final.voted++
//     }
//     return final
// }, {voted: 0})
// console.log(c)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

// const d = wishlist.reduce(function(final, amount) {
//     final += amount.price
//     return final
// }, 0)
// console.log(d)

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]
// const g = arrays.reduce(function(final, array) {
//     final.push(array)
//     return final
// }, [])
// console.log(g)

// console.log(typeof g)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const r = voters.reduce(function(final, voter) {
//     if(voter.age <= 25 && voter.voted == false) {
//         final.numYoungPeople++
//     } else if (voter.age >= 26 && voter.age <= 35 && voter.voted === false) {
//         final.numMidsPeople++
//     } else if (voter.age >= 36 && voter.voted === false) {
//         final.numOldsPeople++
//     } else if(voter.age <= 25 && voter.voted) {
//         final.numYoungVotes++
//         final.numYoungPeople++
//     } else if(voter.age >= 26 && voter.age <= 35 && voter.voted) {
//         final.numMidVotesPeople++
//         final.numMidsPeople++
//     } else if(voter.age >= 36 && voter.voted) {
//         final.numOldVotesPeople++
//         final.numOldsPeople++
//     } 
//     return final
// }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 })

// console.log(r)