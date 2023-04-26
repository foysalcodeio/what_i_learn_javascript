//Array destructure
let number = [10,20,30,40,50]
let [num1, num2, ...z] = number
//that means [num1,num2,num3,num4,num5] = [10,20,30,40,50]
console.log(num1)
console.log(z)

//SWAP VARIABLE

let a = 10, b = 20;
[a, b] = [b, a]
console.log(a)
console.log(b)

//OBJECT DESTRUCTING
const studentInfo = {
    id: 101,
    fullName : 'Foysal Ahmed',
    gpa : 3.92
}

const {id, fullName} = studentInfo

console.log(id)
console.log(fullName)

// NESTED OBJECT DESTRUCTING
const studentsInfo = {
    id: 101,
    Name : 'forhad Ahmed',
    gpa : 3.92,
    languages : {
        native : 'bangla',
        beginner : 'english'
    }
}

const {Name, languages} = studentsInfo

console.log(languages.native)

//DESTRUCTURE FUNCTION PARAMETER
const info = ({id, forName}) => {
    console.log(`${id}, ${forName}`)
}

const student = {
    id : '105',
    forName : "ayaan"
}

info(student)
