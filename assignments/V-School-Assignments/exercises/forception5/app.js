var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


const totalArray = []
function forception(people, alphabet) {
    for(i = 0; i < people.length; i++) {
        const peopleLoop = []
        peopleLoop.push(people[i])
        for(j = 0; j < alphabet.length; j++) {
            peopleLoop.push(alphabet[j]) 
        }
        totalArray.push(peopleLoop)
    } 
}
forception(people, alphabet)
console.log(totalArray)
