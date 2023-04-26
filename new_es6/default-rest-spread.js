function f (x, y=12){
    return x + y
}

f(3) == 15


function rest(x, ...y){
    return x * y.length
}
f(3, "hello", true) == 6


function spread(x, y, z){
    return x + y + z
}
spread(...[1,2,3]) == 6