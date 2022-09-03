const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        showPokemon(data.objects[0].pokemon)
        showURL(data.objects[0].pokemon)
    }
}
function showPokemon(arr) {
    for(let i = 0; i < arr.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name 
        document.body.appendChild(h1)
    }
}
function showURL(arr) {
    for(let i = 0; i < arr.length; i++) {
        const h2 = document.createElement("h2")
        h2.textContent = arr[i].resource_uri 
        document.body.appendChild(h2)
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

