// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a short explanation of your project.",
    },

    {
        type: "input",
        name: "installation",
        message: "Please provide your project installation steps if needed.",
    },

    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use.",
    },

    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT", "GNU GPLv3", "Apache", "Mozilla"],
    },

    {
        type: "input",
        name: "contributing",
        message: "Please list your collaborators, if any, and their GitHub profiles if applicable.",
    },
    
    {
        type: "input",
        name: "tests",
        message: "Please provide tests for your project if applicable.",
    },

    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username?",
    },

    {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Your README file is ready!");
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
};

// Function call to initialize app
init();
