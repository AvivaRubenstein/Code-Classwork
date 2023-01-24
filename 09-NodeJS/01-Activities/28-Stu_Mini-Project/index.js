const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = ({name, location, hobbies, github, linkedIn}) =>
`<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Script Tags and Console Log</title>
</head>

<body>
<header> 
<h1> Hi, my name is ${name} </h1>
</header>
<h3>About me:</h3>
<h3>I am from ${location}, and my favorite hobbies are ${hobbies}</h3>
<ul> 
    <li> My gitHub username is ${github} </li>
    <li> My LinkedIn URL is ${linkedIn} </li>
</ul>
</body>
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
        name: 'location',
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