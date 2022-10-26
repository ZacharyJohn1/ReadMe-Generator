// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = () => { 
    return inquirer.prompt([{
    type: "input",
    name: "readMeTitle",
    message: "What would you like the name of your prooject to be?",
},
{
    type: "input",
    name: "description",
    message: "Describe your project",
},
{
    type: "input",
    name: "installation",
    message: "Do you need to install anything",
},
{
    type: "input",
    name: "usage",
    message: "How does one use your project",
},
{
    type: "input",
    name: "github",
    message: "What is your github username?",
    
},
{
    type: "input",
    name: "contact",
    message: "Where should you be contacted?",
    
},])};

const generateReadMe = ({ readMeTitle, description, installation, usage, github, contact }) =>
  `#${readMeTitle}
  ##${description}
  ##${installation}
  ##${usage}
  ##${github}
  ##${contact}`;

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => {
        const readMeContent = generateReadMe(answers);
    
        fs.writeFile('README.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created Read Me!')
        );
      });

}

// Function call to initialize app
init();
