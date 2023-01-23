const inquirer = require('inquirer');
const fs = require('fs');


const writeHtml = function (user, loc, blurb, linked, git) {
    htmlString = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Portfolio for ${user}</title>
    </head>
    <body>
        <header>
            <div id="name">
                <h1>${user}</h1>
            </div>
            <div id="location">
                <h2>${loc}</h2id=>
            </div>
        </header>
        <main>
            <div>${blurb}</div>
            <div><a href="https://www.linkedin.com/in/${linked}">${linked}</a></div>
            <div><a href="https://github.com/${git}">${git}</a></div>
        </main>
    </body>
    </html>
    `
    fs.writeFile('bio.html', htmlString, function (err) {
        if (err) {
            console.log("Error!");
        } else {
            console.log("File written.");
        }
    }
    );
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