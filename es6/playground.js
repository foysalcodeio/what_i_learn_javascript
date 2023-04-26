const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

/** Normal Function that's work perfectly */
// function show(){
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function() {
//         thanks.innerHTML = `you have type: ${self.value}`;
//     }, 1000);
// }

const show = () => {
    console.log(this);
    display.innerHTML = this.value;
};

searchInput.addEventListener("keyup", show);