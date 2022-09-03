const x = document.getElementById("square")

x.addEventListener("mouseover", function() {
    x.style.backgroundColor = "blue";
})
x.addEventListener("mousedown", function() {
    x.style.backgroundColor = "red";
})
x.addEventListener("mouseup", function() {
    x.style.backgroundColor = "yellow";
})
x.addEventListener("dblclick", function() {
    x.style.backgroundColor = "green";
})
document.addEventListener("wheel", function() {
    x.style.backgroundColor = "orange";
})

document.addEventListener("keypress", function() {
    if( event.key === "b") {
        x.style.backgroundColor = "blue";
    } else if(event.key === "r") {
        x.style.backgroundColor = "red";
    } else if (event.key === "y") {
        x.style.backgroundColor = "yellow";
    } else if (event.key === "g") {
        x.style.backgroundColor = "green";
    } else if (event.key === "o") {
        x.style.backgroundColor = "orange";
    }
})
