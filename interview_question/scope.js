//scope nirdisto area
// var global variable
// what is hoisting ? ans :  kono scope er vitore jodi var bole declare koro tahole oi variable declaration k oi scope er bahira gia tar parent scope e nia na
// what is block scope ?
// thatjsdude.com

let bonus = 20;

function sum(first, second){
    let result = first + second + bonus
    if(result > 9){
        var mood = "happy"
    }
    console.log(mood)
    return result;
}

const output = sum(3, 7);
console.log(bonus)
console.log(output)

