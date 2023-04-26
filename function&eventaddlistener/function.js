function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }else{
        result = num*2;
    }
    return result;
}
function evenify_all(num){
    var even_array = []
    for (let i=0; i<num.length; i++){
        const data = num[i];
        var result = evenify(data);
        even_array.push(result);
    }
    return even_array;
}

num = [5,1,15,45,18,8];
console.log(evenify_all(num));