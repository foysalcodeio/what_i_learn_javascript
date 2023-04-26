function welcomeGuest(name, greetHandler){
    greetHandler(name);
}

const actorName = 'Tom Hanks';

function greetMorning(name){
    console.log('Good morning', name);
}
function greetEvening(name){
    console.log('Good Evening', name);
}
function greetAfternoon(name){
    console.log('Good Afternoon', name);
}

welcomeGuest(actorName, greetEvening); 

// nije nije function make kora 
welcomeGuest('skakib khan', function(name){
    console.log('special Welcome', name);
}); 