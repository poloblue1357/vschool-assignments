const axios = require("axios")

// axios.get("https://swapi.dev/api/people/1").then(response => {
//     console.log(response.data)  
// }).catch(error => {
//     console.log(error)
// })





const newTodo = 
    {   
        "title": "YEP YEP YEP 1357", 
        "description": "marshall miller on a plane's wing",
        "price": 1738, 
        "imgUrl": "https://cdn.shopify.com/s/files/1/2113/9699/files/MARSHALL_MILLER_MOBILE_SLIDE-3_x800.jpg?v=1564179194",
        "completed": false 
    }


axios.post('https://api.vschool.io/dan/todo/', newTodo).then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error)
  });
