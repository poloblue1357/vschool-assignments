const header = document.getElementById("header")
header.textContent = "JavaScript Made This!!"
header.style.fontSize = "x-large"
header.style.textAlign = "center"
header.style.fontWeight = "bold"

const br = document.createElement("br")
header.appendChild(br)

const span = document.createElement("span")
span.textContent = "Dan "
span.style.color = "orange"
span.style.fontSize = "medium"
span.style.textAlign = "center"
header.appendChild(span)

const h4 = document.createElement("span")
h4.textContent = "wrote the JavaScript"
h4.style.fontSize = "medium"
h4.style.textAlign = "center"
header.appendChild(h4)

const left = document.getElementsByClassName("message left")
left[0].textContent = "Good Afternoon. My name is Vincent Twice, Vincent Twice."
left[1].textContent = "No one cares. No one cares."

const right = document.getElementsByClassName("message right")
right[0].textContent = "I'm Count Dracula!"
right[1].textContent = "You said that twice. Ha! Ha! Ha!"

document.getElementById("clear-button").addEventListener("click", function() {
    left[0].textContent = ""
    left[1].textContent = ""
    right[0].textContent = ""
    right[1].textContent = ""
})

document.getElementById("theme-drop-down").addEventListener("change", function() {
    left[0].style.backgroundColor = "red"
    left[1].style.backgroundColor = "red"
    right[0].style.backgroundColor = "black"
    right[0].style.color = "white"
    right[1].style.backgroundColor = "black"
    right[1].style.color = "white"
})




