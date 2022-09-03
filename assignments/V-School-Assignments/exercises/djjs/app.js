const square = document.getElementById ("square")

square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
})

square.addEventListener("click", function() {
    square.style.backgroundColor = "red"
})

square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function () {
    square.style.backgroundColor = "green"
})

document.addEventListener("scroll", function () {
    square.style.backgroundColor = "orange"
})

document.addEventListener("keypress", function() {
    if (event.key === "b") {
        square.style.backgroundColor = "blue"
    } else if (
        (event.key === "r")) {
        square.style.backgroundColor = "red"
    } else if (
        (event.key === "y")) {
        square.style.backgroundColor = "yellow"
    } else if (
        (event.key === "g")) {
        square.style.backgroundColor = "green"
    } else if (
        (event.key === "o")) {
        square.style.backgroundColor = "orange"
    }  
})