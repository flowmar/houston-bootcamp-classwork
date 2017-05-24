// Include 'inquirer' in program
var inquirer = require('inquirer');

// Create a constructor for a Programmer object 
function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;

    // Define method to print Programmer object's properties and values
    this.printInfo = function() {
        console.log("Name: " + this.name +
            "Position: " + this.position + "Age : " +
            this.age + "Language : " + this.language);
    };
}
// Declare a count variable to keep track of the number of times the questions will be asked.
var count = 0;

// askQuestion function
var askQuestion = function() {
    // Count variable is compared to the number of times that you want the questions to be asked.
    if (count < 2) {
        inquirer.prompt([{
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "What is your position?"
        }, {
            name: "age",
            message: "What is your age?"
        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }]).then(function(answers) {
            var dude = new Programmer(answers.name, answers.position, answers.age, answers.language);
            dude.printInfo();
            count++;
            askQuestion(); // << askQuestion function within the askQuestion function.
        });
    } else {
        console.log("All done!");
    }
};

askQuestion();