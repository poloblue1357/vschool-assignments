// function getData(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const jsonData = xhr.responseText
//             const data = JSON.parse(jsonData)
//             return callback(data)
//         }
//     }
//     xhr.open("GET", url, true)
//     xhr.send()
// }

// getData("https://swapi.dev/api/people/1/", function(lukeData) {
//     console.log(lukeData.homeworld)
//     console.log(lukeData.name)

// getData(lukeData.homeworld, function(planetData) {
//         lukeData.homeworld = planetData.name

//   console.log(lukeData.homeworld)

//     })
// })

// const food = ["tomato", "watermelon", 5, 6, 'fish", "oil", 7']

// const food = [ 'apple', 'orange', 'watermelon', 5, 'carrot', 'tomato', 'pepper', 6 ]

// const a = food.slice(4, 6)

// console.log(food.slice(-4, -1))