const form = document.form 

form.addEventListener("submit", function(event) {
    event.preventDefault()

    firstName = form.firstName.value
    lastName = form.lastName.value
    age = form.age.value
    gender = form.gender.value

    city = form.city.value

    let checked = []
    for(i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            checked.push(form.diet[i].value)
        }
    }

    alert(`
    First name: ${firstName} 
    Last name: ${lastName} 
    Age: ${age} 
    Gender: ${gender} 
    Location: ${city} 
    Dietary restrictions: ${checked}`)
    console.log(firstName, lastName, age, gender, city, checked)
    
})