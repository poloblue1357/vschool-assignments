const axios = require("axios")

axios.get("https://swapi.co/api/people/1").then((response) => {
    console.log(response.data.name)
})

const id = ""

axios.put("https://swapi.co/api/people.1" + id, editedToD).then((response) => {

})

