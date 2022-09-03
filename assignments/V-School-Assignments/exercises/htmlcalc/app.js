const a = document.getElementById("add")
const s = document.getElementById("subtract")
const m = document.getElementById("multiply")

a.addEventListener("submit", function () {
    event.preventDefault()
    console.log(+a.numb1.value + +a.numb2.value)
    a.numb7.value = +a.numb1.value + +a.numb2.value
})


s.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(+s.numb3.value - +s.numb4.value)
    s.numb8.value = +s.numb3.value - +s.numb4.value
})

m.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(+m.numb5.value * +m.numb6.value)
    m.numb9.value = +m.numb5.value * +m.numb6.value
})


