function getData(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = xhr.responseText
            const data = JSON.parse(jsonData)
            return callback(data)
        }
    }
    xhr.open("GET", url, true)
    xhr.send()
}

getData("https://swapi.dev/api/people/1/", function(lukeData) {
    console.log(lukeData.homeworld)

getData(lukeData.homeworld, function(planetData) {
        lukeData.homeworld = planetData.name

  console.log(lukeData.homeworld)

    })
})
