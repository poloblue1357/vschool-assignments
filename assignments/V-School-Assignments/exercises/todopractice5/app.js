const todoForm = document.todoForm 
const div = document.getElementById("div")
const axios = require("axios")

axios.get("https://api.vschool.io/dan/todo/")
    .then(response => {
        let todoItem = response.data
        for(let i = 0; i < todoItem.length; i++) {
            createToDo(todoItem[i])
        }
    })
    .catch(error => console.log(error))

todoForm.addEventListener("submit", function(event) {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value,
    }
    axios.post("https://api.vschool.io/dan/todo/", newTodo)
        .then(response => console.log(response))
        .catch(error => console.log(error))
})
let editTodo = function(todoItem, updates) {
    axios.put(`https://api.vschool.io/dan/todo/${todoItem}`, updates)
    .then(response => {
        alert("updated!")
        console.log(response.data)

    })
    .catch(error => console.log(error))
}
let deleteTodo = function(todoItem) {
    console.log(todoItem)
    axios.delete(`https://api.vschool.io/dan/todo/${todoItem}`)
        .then(function(response)  {
            alert('Your todo was deleted! Refresh the page.')
        })
        .catch(error => console.log(error))
}

function createToDo(todoItem) {
    const container = document.createElement("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const h4 = document.createElement("h4")
    const img = document.createElement("img")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.name = "checkbox"
    checkbox.value = "value"
    checkbox.addEventListener("change", () => {
        let updates
        if(checkbox.checked) {
            updates = {completed: true}
        } else {
            updates = {completed: false}
        }
        editTodo(todoItem._id, updates)
    })

    const deleteB = document.createElement("button")
    deleteB.textContent = "Delete"
    deleteB.addEventListener("click", () => {

        deleteTodo(todoItem._id)
    })

    h3.textContent = todoItem.title 
    p.textContent = todoItem.description 
    h4.textContent = "$" + todoItem.price 
    img.src = todoItem.imgUrl
    img.width = "400"
    img.height = "400"

    container.appendChild(h3)
    container.appendChild(p)
    container.appendChild(h4)
    container.appendChild(img)
    container.appendChild(checkbox)
    container.appendChild(deleteB)
    div.appendChild(container)
}


