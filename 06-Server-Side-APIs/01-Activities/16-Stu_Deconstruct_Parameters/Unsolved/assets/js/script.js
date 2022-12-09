fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
//per page will limit the results base per page
//the state parameter represents the current state of the issue, it can be open, closed, or all issues
//sort will order results based on the parameter given, date created, updated, or comments
//direction will determine the order of the sort -- ascending or descending
