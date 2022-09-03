// import axios from "axios"

const axios = require("axios");
const list = document.getElementById("list")

axios.get("https://api.vschool.io/dan/todo").then((response) => {
    let todos = response.data
    console.dir(todos)
    for( let i = 0; i < todos.length; i++) {
       createToDo(todos[i])
    }
})

document.form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newToDo = {
        title: e.target.title.value,
        price: e.target.price.value,
        description: e.target.description.value,
        imgUrl: e.target.image.value,
    } 
    // createToDo(newToDo)
    axios.post("https://api.vschool.io/dan/todo/", newToDo).then((response) => {
        createToDo(response.data)
    }) 
})

function createToDo(todo) {
    // var i = document.createElement("input")
    // i.setAttribute("type", "checkbox")
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const input = document.createElement("input")
    const deletebutton = document.createElement("button")

    h1.textContent = todo.title
    p.textContent = todo.description
    img.src = todo.imgUrl
    h3.textContent = todo.price
    input.type = "checkbox"
    deletebutton.textContent = "delete" 

    input.checked = todo.completed

    container.appendChild(h1)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(h3)
    container.appendChild(input)
    container.appendChild(deletebutton)
    console.log(container) 
    list.appendChild(container)
    deletebutton.addEventListener("click", e => {
        axios.delete("https://api.vschool.io/dan/todo/" + todo._id).then((response)=> {
            response.data
            container.remove()
        })
    })
    input.addEventListener("change" , e => {
        axios.put("https://api.vschool.io/dan/todo/" + todo._id, {completed: e.target.checked}).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
        })
    })
    if(todo.completed === true) {
        h1.style.textDecoration = "line-through"
    }
}



