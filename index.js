//duplicate number is not here
/*
var names = [3, 6, 2, 7, 3, 2, 8, 1, 9, 11, 56];
var uniqueName = [];

for (var i=0; i< names.length; i++){
    var element = names[i];
    var index = uniqueName.indexOf(element); // element is not here value.
    if (index == -1) { // -1 means ae index e value nai
        uniqueName.push(element);
    }
}
console.log(uniqueName);
*/

//arguments function

function getFullName(firstName, lastName){
  // console.log(arguments);
    let fullName = ' ';
   // const result = [...arguments].join(' '); // this similar an array but not an array this is array like object
    for(let i=0; i < arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}

const name = getFullName('Hanif', 'foysal', 'Paribahan', 'rahim', 'karim');
console.log(name);