// const animal = 3
// switch(animal){
//     case 1:
//         document.write('Cow');
//         break;
//     case 2:
//         document.write('Chicken');
//         break;
//     case 3:
//         document.write('Monkey');
//         break;
//     default:
//         document.write('Animal?');
// }



const expr = 'Papayas';
switch(expr){
    case 'Oranges':
        console.log('Oranges are $0.50 a pound. ');
        break;
    case 'Mangoes':
        console.log('Mangoes are $2.66 a pound ');
        break;
    case 'Papayas':
        console.log('Papayas are $10 a pound. ');
        break;
    default:
        console.log(`Sorry, we are out ${expr}. `);
}