// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const licenseLookup = require('./utils/licenseLookup')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project please: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a short description of your project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation rerquirements for your project: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage instructions for your project: ',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select a license: ',
        name: 'license',
        choices: licenseLookup,
    },
    {
        type: 'input',
        message: 'Enter any guidlines for contribution for your project: ',
        name: 'constributions',
    },
    {
        type: 'input',
        message: 'Enter any testing instructions for your project: ',
        name: 'test'
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username: ',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter the email you would like to use for communication with this project: ',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('All set!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('./example/gen-README.ms', answers);
        })
}

// Function call to initialize app
init();
