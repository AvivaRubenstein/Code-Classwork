const axios = require("axios");

function MovieSearch() {}
//when a search is made, it makes a get request/API call to look up that movie
MovieSearch.prototype.buildUrl = function(movie) {
  return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
};

MovieSearch.prototype.search = function(movie) {
  return axios.get(this.buildUrl(movie));
};

module.exports = MovieSearch;
