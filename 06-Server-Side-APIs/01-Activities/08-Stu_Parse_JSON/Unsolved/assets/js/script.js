// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
//owner is twitter, repo is Chill
//git parameter has a ? followed by a key = first value
//this is how we tell them we want to limit the data to a certain amount
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    //console.log(data);
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
    for(i=0; i < data.length ; i++) {
      //console.log(data);
      console.log(data[i].url);
      //there is a user object, and we need to drill down into it to get the user login
      console.log(data[i].user.login);
    }
  });
