var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

const x = fruit.indexOf("orange")
console.log(x)

fruit.push(x)
console.log(fruit)

const y = vegetables.length
console.log(y)

vegetables.push(y)
console.log(vegetables)

const food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()

const a = food.toString()
console.log(a)