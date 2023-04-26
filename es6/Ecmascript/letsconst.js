// var = like global variable 
// const = parmanent / fixed / not change
// let = change hote pare, 
const hubby = "Elias Kanchon";
console.log(hubby);

const numbers = [12, 45];
numbers[1] = 88;
console.log(numbers); 
numbers.push(55);
const nayok = {
    name : "sakib",
    phone : 4575
};
//console.log(numbers);

let patientName = "Rahim chaca"
patientName = "Fatema Khala"
console.log(patientName);

// let er scope variable ata bahire leak hoy na private or var leak hoye jai
let sum = 0;
for(const i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i);