var colors = ["blue", "red", "yellow", "black"]
var colorIndex = colors.indexOf("yellow")

// var removed = colors.splice(0, 2+1)
// console.log(colors)
// console.log(colorIndex)

// remove using splice
for(var i = 0; i <= colors.length; i++){
    if( i === 2 ){
        colors.splice(i, 2)
    }
}
console.log(colors)

//data push using push function
for( var i = 0; i <= colors.length; i++){
    if( i === 2){
        colors.push("orange", "purple")
    }
}
console.log(colors)



// array remove using filter & new_create function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function arrRemove(arr, value){
    return arr.filter(function(element){
        return element != value
    })
}

var result = arrRemove(arr, 6)
console.log(result)

