const person = { name: 'jack William', age: 17, job: 'facebook', gfName: 'Ema watson', address: 'kocokhet', phone:'01790477236', friends: ['Tom hanks', 'akash', 'nazim']}
const {name, age, phone} = person

//console.log(name, age, phone);

const friends = ['sakib', 'khan', 'poly', 'jakir', 'kader', 'samsu'];
const [first, second, ...rest] = friends
//const [...rest] = friends; // all name take
console.log(rest);


const complexObj = {
    name: 'abc',
    Info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObj.Info;
console.log(leader)

// false value under description
// 0
// ""
// undefined
//null
// NaN

//Truthy
// '0' ' '