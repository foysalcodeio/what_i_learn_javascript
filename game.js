var numOfWin = 0;
var numOfLost = 0;

for(var i = 1; i <= 5; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber = Math.floor(Math.random()*5) + 1;
        if(guessNumber == randomNumber){
            console.log("you are won");
            alert("you are won")
            numOfWin++;
        }else{
            console.log("you have lose try again");
            console.log("your number has " + randomNumber);
        alert("you have lose")
        numOfLost++;
    }
}
document.write("Number of win = " + numOfWin + "<br/>");
document.write("Number of Lost = " + numOfLost + "<br/>");