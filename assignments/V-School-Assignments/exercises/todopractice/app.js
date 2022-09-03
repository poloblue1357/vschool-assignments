// const axios = require("axios")
const list = document.getElementById("list")

axios.get("https://api.vschool.io/dan/todo/").then((response) => {
    let todos = response.data
    console.dir(todos)
    for(let i = 0; i < todos.length; i++) {
        createToDo(todos[i]) 
    } 
})

function createToDo(todos) {
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    if (todos.completed === true) {
        h1.style.textDecoration = "line-through"
    }
    h1.textContent = todos.title
    p.textContent = todos.description
    img.src = todos.imgUrl
    

    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    console.log(container)
    list.appendChild(container)
}




