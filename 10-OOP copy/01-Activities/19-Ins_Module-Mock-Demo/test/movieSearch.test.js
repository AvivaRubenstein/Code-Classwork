const axios = require("axios");
const MovieSearch = require("../movieSearch");
//when we are running our tests, we may not want to actually make an API call every time we are testing it
//so we mock the api call

//mock the axios package
jest.mock("axios");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });
//We mock the API response!
  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      //we can mock the data that the api would return
      //we set up a promise bc fetch works using promises -- we return an empty data object when the promise resolves
          //or we could have mocked the actual results that would have been returned from the api
      //we then search for the movie Rocky
      axios.get.mockReturnValue(
        new Promise(function(resolve) {
          resolve({ data: {} });
        })
      );
//when we search for Rocky, we expect it to resolve to be equal to the empty data object we set up
      expect(movie.search(name)).resolves.toEqual({ data: {} });
      //we also check whether the URL was built the way it was supposed to, whether the right kind of value was passed in (Rocky was passed in as a string)
      expect(axios.get).lastCalledWith(movie.buildUrl(name));
    });
  });
});
