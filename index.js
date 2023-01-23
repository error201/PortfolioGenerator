const inquirer = require('inquirer');
const fs = require('fs');

const writeHtml = function (user, loc, blurb, linked, git) {
    console.log(user, loc, blurb, linked, git);
};

const init = function () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your full name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Write a short bio about yourself.',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn username?',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'gitHub',
        },
    ]).then((response) =>
    writeHtml(response.username, 
        response.location, 
        response.bio, 
        response.linkedIn, 
        response.gitHub)
    );
}

init();