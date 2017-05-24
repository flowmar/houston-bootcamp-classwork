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

var nouns = [];
var adjectives = [];
var verbs = [];
// Keeps track of how many times we are looping through our getWords function
var loop = 0;

function getWords(loop) {
    console.log(nouns);
    console.log(adjectives);
    // 2, because we are looping through 2 times in order to fill both [noun]s in the story
    if (loop < 2) {
        inquirer.prompt({
            name: "noun",
            message: "Enter a noun: "
        }).then(function(answers) {
            nouns.push(answers.noun);
            loop++;
            getWords(loop);
        });
    }
    if (loop >= 2 && loop < 3) {
        inquirer.prompt({
            name: "adjective",
            message: "Enter an adjective: "
        }).then(function(answers) {
            adjective.push(answers.adjective);
            loop++;
            getWords(loop);
        })
    }
}

getWords(loop);