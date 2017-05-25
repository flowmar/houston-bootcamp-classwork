// Enable strict mode
'use strict';

// Include inquirer in program
var inquirer = require('inquirer');

var questions = [{
        type: 'input',
        name: 'first_name',
        message: 'WHO IZ U???'
    },
    {
        type: "list",
        name: "doingWhat",
        message: "What are you doing in my house?",
        choices: [

            "I made you cookies!",
            "Stealing all your stuff, duhhhh.",
            "Getting Schwifty",
            "This is my house, you idiot."
        ]
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What\'s your last name?',
        default: function() {
            return 'Habadasher';
        }
    },
    {
        type: 'checkbox',
        message: 'Choose your weapons wisely, adventurer.',
        name: 'weapon',
        choices: [
            new inquirer.Separator(' = Weapons = '),
            {
                name: 'Sword of Doom'
            },
            {
                name: 'Blade of Sadness'
            },
            {
                name: 'Gauntlets of Evil'
            },
            {
                name: 'Fly Swatter of Guilt'
            },
            {
                name: 'Bacon'
            }
        ]
    }
];

inquirer.prompt(questions).then(function(answers) {
    console.log(JSON.stringify(answers, null, '  '));
});