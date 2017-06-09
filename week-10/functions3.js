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
        // 
        setTimeout(function() {
            console.log("2 Lol");
            //
            setTimeout(function() {
                console.log("3 What?");
            }, rn3);
            //
            setTimeout(function() {
                console.log("4 Cheeseburgers");
            }, rn4);
        }, rn2);


    }, rn1);



}

functionName();