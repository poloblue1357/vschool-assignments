const button = document.getElementById("button")

button.addEventListener("click", function (e) {
    e.preventDefault()
    const A = document.travel.first.value;
    const B = document.travel.last.value;
    const C = document.travel.age.value;
    const D = document.travel.gender.value;
    const E = document.travel.select.value;
    const F = document.travel.diet.value;
    const asdf = []
    for (let i = 0; i < E.length; i++) {
        if (E[i].checked) {
            asdf.push(E[i].value)
        }}
    const qwer = []
    const checkedBoxes= document.querySelectorAll("input[type=checkbox]");
    for (let j = 0; j < checkedBoxes.length; j++) {
            if (checkedBoxes[j].checked) {
            qwer.push(checkedBoxes[j].value);
        }
    }
    alert(`
    Name: ${A} ${B} 
    Age: ${C} 
    Gender: ${D} 
    Destination: ${E} 
    Dietary Restrictions: ${qwer}`)
    console.log() 
})
