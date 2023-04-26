const numbers = [3, 4, 5, 6, 7, 8];
// const output = []

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element
//     output.push(result)
// }

//general function 1
function square(element){
    return element * element;
}

// function 2
const squares = element => element * element
// function 3
const squares2 = x => x * x; 


// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })

//short map declare

// const result = numbers.map(x => x * x)
// console.log(result)

//console.log(output)
// ====================================================================== filter ==========
// olpo kisu select kora jonno
// oi condition jodi fullfull kore tahole amk daw

const bigger = numbers.filter(x => x > 5);
const isThere = numbers.find(x => x > 5)
console.log(bigger)
console.log(isThere)
