const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 10, name: 'Sunny'},
    {id: 41, name: 'Omar'},
    {id: 5, name: 'deepJol'}
];

const names = students.map( s => s.name)
const ids = students.map( s => s.id)

const bigger = students.filter(s => s.id > 20 )
const biggerOne = students.find(s => s.id > 20) // find just single match
console.log(ids, names)
console.log(bigger)
console.log(biggerOne)