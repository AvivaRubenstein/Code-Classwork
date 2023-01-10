const inquirer = require('inquirer');

inquirer
  .prompt([ 
    {
      type: 'input',  //accepts regular text
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'checkbox',  
      message: 'What languages do you know?',
      name: 'languages', 
      choices: ["HTML", "CSS", "Javascript", "MySQL"] 
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'method',
      choices: ["Email", new inquirer.Separator(), "Text message", new inquirer.Separator(), "Phone call"]
    },
  ])
  //now we need to write all of these to a file
  .then((response) => {
    console.log(response.username + " " + response.languages + " " + response.method);
    
    //we pass all of the data, make it into a JSON string w JSON.stringify, 
    //add tabs as indentation with \t
    //see solved 
}
  );
