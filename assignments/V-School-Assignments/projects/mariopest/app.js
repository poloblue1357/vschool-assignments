const button = document.getElementById("button")
const g = document.totals.totalgoomba
const b = document.totals.totalbob
const c = document.totals.totalcheep
const t = document.overall.overalltotal

button.addEventListener("click", function (e) {
    let q = 5
    let w = 7
    let r = 11
    t.value = (q * g.value) + (w * b.value) + (r * c.value)
})
