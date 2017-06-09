// A promise is the same thing as a callback, but with different syntax

inquirer.prompt(questions).then(function(answers) {
    console.log("blahhhh");
    console.log(JSON.stringify(answers, null, 'whatever'));
});