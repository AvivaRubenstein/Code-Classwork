const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = ({name, location, github, linkedIn}) =>
`<!DOCTYPE html>
</html>`;
inquirer
  .prompt([ 
    {
      type: 'input',  //accepts regular text
      message: 'What is your name?',
      name: 'name',
    },
    {
        type: 'input',  //accepts regular text
        message: 'Where are you from?',
        name: 'origin',
      },
      {
        type: 'input',  //accepts regular text
        message: 'What are your hobbies?',
        name: 'hobbies',
      },
    {
        type: 'input',  //accepts regular text
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',  //accepts regular text
        message: 'What is your LinkedIn URL?',
        name: 'linkedIn',
      },
   
  ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err? console.log(err) : console.log("Successfully created index.html!"));

  });