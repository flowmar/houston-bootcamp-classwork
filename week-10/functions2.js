// Creates a random integer up to 'max'
var randomNumber = function(max) {
    return Math.ceil(Math.random() * max);
};

function functionName() {
    const rn1 = randomNumber(50);
    const rn2 = randomNumber(50);
    const rn3 = randomNumber(50);
    const rn4 = randomNumber(50);
    // We give setTimeout an anonymous function
    setTimeout(function() {
        console.log("1 Stuff");
    }, rn1);
    // ^^ same thing as inquirer.prompt(function(){
    // 
    // });
    // There is a 'pause' timeout on the inquirer.prompt method which stops and waits for user input
    setTimeout(function() {
        console.log("2 Lol");
    }, rn2);

    setTimeout(function() {
        console.log("3 What?");
    }, rn3);

    setTimeout(function() {
        console.log("4 Cheeseburgers");
    }, rn4);

}

functionName();