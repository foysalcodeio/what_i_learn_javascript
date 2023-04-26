function explain_callback(name, age, task){
    console.log('Hello ', name);
    console.log('your age ', age);
    task()
}

function washHand(){
    console.log('wash hand with soap');
}

function takeshower(){
    console.log('Take shower')
}
function scrollFacebook(){
    console.log('scroll facebook but dont like')
}
explain_callback('sagir', 30, washHand);
explain_callback('jagir', 10, takeshower);
explain_callback('mugir uddin', 11, scrollFacebook)