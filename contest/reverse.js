function reverseString(str){
    var rev = "";
    for (var i=0; i<str.length; i++){
        var char = str[i];
        rev = char + rev;
    }
    return rev;
}
var statement = "Hello Alien";
var forAlien = reverseString(statement);
console.log(forAlien);