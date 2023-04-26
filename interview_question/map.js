const numbers = [4,9,16,25]
const newArr = numbers.map(Math.sqrt)
const newArr2 = numbers.map(my_sqrt)

const roots = numbers.map((num) => Math.sqrt(num))
console.log(roots)


function my_sqrt(num){
    return num * num;
}
// console.log(newArr2)


// ======================= object
const person = [
    {
        firstName : "foysal",
        lastName : "Ahmed"
    },
    {
        firstName : "Abdullah",
        lastName : "Ayaan"
    },
    {
        firstName : "forhad",
        lastName : "Ahmmed"
    }
]

// show all data using map in arrow function

const showData = person.map(({ firstName, lastName}) => ({ [firstName]: lastName }));
console.log(showData)


//const data = person.map(per => person)
const data = person.map(getName)

function getName(names){
    return [names.firstName, names.lastName].join(" ")
}



console.log(data)


var officers = [
    {id: 20, name:'captain Piett'},
    {id: 21, name:'General Veers'},
    {id: 22, name:'Admiral Ozzel'},
    {id: 23, name:'Coomander Jerjerrod'}
]

//const officersIds = officers.map(officer => officer.id)
const officersIds = officers.map(function(officer){
    return officer.id
})
console.log(officersIds)


