const addition = document.getElementById("addition")

addition.addEventListener("submit", function(event) {
    event.preventDefault()

    const num1 = addition.add1.value
    const num2 = addition.add2.value

    addition.add1.value = ""
    addition.add2.value = ""

    const h3 = document.createElement("h3")
    h3.textContent = +num1 + +num2
    document.getElementById("addition").append(h3)
})
const subtraction = document.getElementById("subtraction")

subtraction.addEventListener("submit", function(event) {
    event.preventDefault()

    const subt1 = subtraction.sub1.value
    const subt2 = subtraction.sub2.value

    subtraction.sub1.value = ""
    subtraction.sub2.value = ""

    const h3 = document.createElement("h3")
    h3.textContent = +subt1 - +subt2
    document.getElementById("subtraction").append(h3)
})
const multiplication = document.getElementById("multiplication")

multiplication.addEventListener("submit", function(event) {
    event.preventDefault()

    const mult1 = multiplication.mul1.value
    const mult2 = multiplication.mul2.value

    multiplication.mul1.value = ""
    multiplication.mul2.value = ""

    const h3 = document.createElement("h3")
    h3.textContent = +mult1 * +mult2
    document.getElementById("multiplication").append(h3)
})