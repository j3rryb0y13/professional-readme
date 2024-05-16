// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./develop/utils/generateMarkdown');
const { type } = require('os');
const { default: Choice } = require('inquirer/lib/objects/choice');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project'
  },
  {
    type: 'input',
    name: 'installatioin',
    message: 'Please provide installation instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usuage information'
  },
  {
    type: 'input',
    name: 'contributing'
    message: 'Please provide contributiion guideline'
  },
  {
    type: 'input',
    name: 'tests'
    message: 'Please provide test instructions'
  },
  {
    type: 'input',
    name: 'license'
    message: 'Please choose a license for your project'
    Choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'github'
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  // Add more questions here for other project information
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md generated successfully!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      console.log('Data Object:', answers);
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred:', error);
    });
}

// Function call to initialize app
init();
