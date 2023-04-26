// import readline module
const readline = require("readline");
// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// create empty user input
let userInput = "";
// question user to enter name
rl.question("", function (string) {
  //userInput = string;
  //console.log(userInput);
  console.log(string);
  rl.close();
});