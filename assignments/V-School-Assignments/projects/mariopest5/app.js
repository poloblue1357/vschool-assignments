const goomba = document.goombaInput.goombaTotal
const bobomb = document.bobombInput.bobombTotal 
const cheep = document.cheepInput.cheepTotal 

const button = document.getElementById("submitButton")

const totalPrice = document.total.totalPrice

button.addEventListener("click", function(event) {

    let a = 5
    let b = 7
    let c = 11

    totalPrice.value = (goomba.value * a) + (bobomb.value * b) + (cheep.value * c)
})



