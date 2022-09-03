const newItem = document.getElementById("title") // input in form
const uL = document.getElementById("list") // for unordered list

document.addEventListener("submit", function(e) {
    e.preventDefault()
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
    const newList = document.createElement("li")
    const newDiv = document.createElement("div")

    newDiv.textContent = newItem.value
    deleteButton.textContent = "X"
    editButton.textContent = "Edit"

    newItem.value = ""

    newList.append(newDiv)
    newList.append(editButton)
    newList.append(deleteButton)
    uL.append(newList)

    deleteButton.addEventListener("click", function(e) {
        newList.remove()

    })
    editButton.addEventListener("click", function(e) {
        e.preventDefault()
        const form = document.createElement("form")
        const input = document.createElement("input")
        const saveButton = document.createElement("button")
        editButton.remove()
        saveButton.textContent = "Save"
       
        newList.append(saveButton)

        saveButton.addEventListener("click", function(e) {
            e.preventDefault()
            

        })
    })
    
    
})

