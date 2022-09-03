// var input = "";

// try {
//   if(input == "") {
//     throw "Input can not be empty";
//   } else if(input.length > 5) {
//     throw "Input is to big";
//   } else {
//     console.log("You code runs fine!");
//   }
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Runs no matter what");
//   console.log("And the input was " + input);
// }

// 1A) 
// try {
//     function sum(x, y) {
        
//         if(typeof x == Number) {
//             throw "not a number"
//         }
//         return x + y
//     }
// }
// catch(err) {
//     console.log(err)
// }



// 1B)
// try {
//     console.log(sum(1, 2))
// }
// catch(err) {
//     console.log(err)
// }


// 2A)
// var user = {username: "sam", password: "123abc"};

// function login(username, password){
//   try {
//       if(username === "sam" && password === "123abc") {
//           console.log("login successful")
//       } else {
//           throw "username or password don't match"
//       }
//   }
//   catch(err){
//       console.log(err)
//   }
// }
// console.log(login("sam", "123abc"))


// 2B)
// try {
//     function login(username, password) {
//         if(password === "123abc" && username === "sam") {
//             console.log("good to go!")
//         } else if( username !== "sam" || password !== "123abc") {
//             throw "you can't login brohan!"
//         }
//     }
    
// }
// catch(err) {
//     console.log(err)
// }
// console.log(login("same", "1254abc"))
