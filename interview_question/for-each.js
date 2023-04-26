const fruits = ["apple", "orange", "cherry"]
fruits.forEach(printFunction)

function printFunction(data){
    console.log(data)
}

// summation
let sum = 0
const numbers = [65, 44, 12, 4]
numbers.forEach(sumFunction)

function sumFunction(num){
    sum = sum + num
}
console.log(sum)

// maltiply
const data = [65, 44, 12, 4]
data.forEach(mulFunction)

function mulFunction(item, index, data){
    data[index] = item * 10
}
console.log(data)

var officers = [
    {id: 20, name:'captain Piett'},
    {id: 21, name:'General Veers'},
    {id: 22, name:'Admiral Ozzel'},
    {id: 23, name:'Coomander Jerjerrod'}
]
var officersId = []
officers.forEach(function (officers){
    officersId.push(officers.id)
})
console.log(officersId)

let values = [1,2,3,4,5,6,7,8]
let total = 0
values.forEach(function(number){
    total+=number
})
console.log(total)

let array_of_arrays = [
    [1,2],
    [3,4],
    [5,6]
]
const concatenated = array_of_arrays.reduce(function (previews, current){
    return previews.concat(current)
})
console.log(concatenated)