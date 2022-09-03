
function multTable(numbers) {
    const product = []
    for (i = 0; i <= numbers; i++) {
    let newArr =[]
        for (let j = 0; j <= numbers; j++){
            newArr.push(i*j)
    }
    product.push(newArr)
}
return product
}

console.log(multTable(10))

// const grid = []
// for (let i = 0; i < array.length; i++) {
//     const gri = [];
//     for (let j = 0; j < array.length; j++) {
//        gri.push(j) 
//        //math before return
//     }
//     grid.push(gri)
// }
    




