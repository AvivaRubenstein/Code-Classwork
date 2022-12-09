var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      // Check the console first to see the response.status
      console.log(response.status);
      // Then write the conditional based on that response.status value
      // Make sure to display the response on the page
      if (response.status === 404){
        responseText.textContent = response.status;
      } 
      //We have to remember to return the response as a JSON object
      //the data won't be accessible unless we return
      //no data will be passed into the next function  
      return response.json();

    })
    .then(function (data) {
      console.log(data);
    });
}

getApi(badRequestUrl);
