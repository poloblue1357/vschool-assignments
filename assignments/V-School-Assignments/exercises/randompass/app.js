// function passGen(number) {
//     // var length = 8
//     var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     retValue = "";
//     for(let i = 0, n = a.length; i < a.length; ++i) {
//         retValue += a.charAt(Math.floor((Math.random() * n)))    
// }console.log(retValue)
// }


// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }


function randomPasswordGenerator (passLength) {
    const password = [];
    let randChar;
    for (let i = 0; i < passLength; i++) {
        randChar = String.fromCharCode(Math.round(Math.random() * 94) + 32);
        password.push(randChar);
    } 
    return password.join("");
}
console.log(randomPasswordGenerator(10))