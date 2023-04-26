const materials = [
    'hydrozen',
    'Helium',
    'Lithium',
    'Beryllium'
]

console.log(materials.map(x => x ))
console.log(materials.map(x => x.length ))




const obj = {
    num: 100
}
const add = function(a, b, c){
    return this.num + a + b + c
}
//call
const result = add.call(obj, 1, 2, 3)
console.log(result)

//apply
const arr = [1, 2, 3]
const values = add.apply(obj, arr)
console.log(values)

//bind
const result2 = add.bind(obj)
console.log(result2(1, 2, 3))



const obj2 = {
    count: 10,
    doSomethingLater(){
        setTimeout( () => {
            this.count++;
            console.log(this.count)
        }, 300);
    }
}
obj2.doSomethingLater()