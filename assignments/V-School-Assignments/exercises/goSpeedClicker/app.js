const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

let count = 0

const button = document.getElementById("submitButton")
button.addEventListener("click", function(e) {
    e.preventDefault()

    count++
    h1.textContent = "Click count: " + count

    
    localStorage.setItem("clickCount", count)
    
})

    const clickCount = localStorage.getItem("clickCount")
    h2.textContent = "Local storage clicks: " + clickCount

