const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 29, 35];
const allAges = ages.concat(ages2).concat([11]).concat(ages3);

const allAges2 = [...ages, ...ages2, 5, ...ages3];


const business = 650;
const minister = 450;
const sochin = 250;

const maximum = Math.max(business, minister, sochin);

const taka = [650, 250, 10];
const maxi = Math.max(...taka)


const num = [55, 45, 5, 6, 7];
const [one, two, ...rest] = num;
//console.log(num);

// ------------ object -------------
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  const Vehicle = {...myVehicle, ...updateMyVehicle}



  function sum(x, y, z){
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));
  console.log(sum.apply(null, numbers));