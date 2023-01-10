const inquirer = require('inquirer');

inquirer
  .prompt([ //prompting user to put in a user name and a pw, and then confirm their pw 
  //it will confirm if they match
    {
      type: 'input',  //accepts regular text
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',  //will obscure password
      message: 'What is your password?',
      name: 'password',  //we can reference it as password below - it will be stored there
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm', //we can reference it as confirm below
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
