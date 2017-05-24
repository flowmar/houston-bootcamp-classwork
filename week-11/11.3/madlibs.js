// Include inquirer in application
var inquirer = require('inquirer');

// Constructor function which creates a MadLib object
function MadLib(nouns, adjectives, verbs) {
    this.nouns = nouns;
    this.adjectives = adjectives;
    this.verbs = verbs;
    // The words in brackets are ones that we will later search for and replace with user input
    this.story = "Once upon a [noun] there was a [adjective] village fileld with [noun]. The villagers loved to [verb] all day long.";
}

// Declare array variables to store user input
var nouns = [];
var adjectives = [];
var verbs = [];
// Keeps track of how many times we are looping through our getWords function
var loop = 0;

function getWords(loop) {
    console.log(nouns);
    console.log(adjectives);
    console.log(verbs);
    // 2, because we are looping through 2 times in order to fill both [noun]s in the story (Index 0 and 1)
    if (loop < 2) {
        // Prompt user to enter a noun
        inquirer.prompt({
            name: "noun",
            message: "Enter a noun: "
                // After prompting occurs, then pass the answers to the function
        }).then(function(answers) {
            // Push the noun answer to the nouns array
            nouns.push(answers.noun);
            loop++;
            // Repeat the function for more input
            getWords(loop);
        });
    }
    // If loop is equal to 2 
    if (loop >= 2 && loop < 3) {
        // Prompt user for an adjective
        inquirer.prompt({
            name: "adjective",
            message: "Enter an adjective: "
        }).then(function(answers) {
            // Push user input to the 'adjectives' array
            adjectives.push(answers.adjective);
            loop++;
            getWords(loop);
        });
    }
    // If loop is equal to 3
    if (loop >= 3 && loop < 4) {
        inquirer.prompt({
            name: "verb",
            message: "Enter a verb: "
        }).then(function(answers) {
            verbs.push(answers.verb);
            var madLib = new MadLib(nouns, adjectives, verbs);
            console.log(madLib);
        });
    }
}

getWords(loop);