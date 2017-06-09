// Creates a random integer up to 'max'
var randomNumber = function(max) {
    return Math.ceil(Math.random() * max);
};

function takesCallbacks(a, b, c) {
    const rn1 = randomNumber(50);
    const rn2 = randomNumber(50);
    const rn3 = randomNumber(50);
    // We give setTimeout an anonymous function
    setTimeout(function() {
        a();
        // 
        setTimeout(function() {

            b();

            console.log("2 Lol");
            //
            setTimeout(printsWhat, rn3);
            //
        }, rn2);


    }, rn1);



}

function printsWhat() {
    console.log("1 What?");
}

function printsLol() {
    console.log("2 Lol");
}

function printsCheeseburgers() {
    console.log("3 Cheeseburgers");
}

function takesCallbacks(a, b, c) {
    a();
    b();
    c();
}

takesCallbacks(printsWhat, printsLol, printsCheeseburgers);