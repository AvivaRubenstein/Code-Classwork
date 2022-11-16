var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.push("Canis Major");

var newPlanets = planets.slice(0,5);
planets = newPlanets;
console.log(planets);

var galaxy = constellations.concat(planets);
console.log(galaxy);

var upperStar = star.toUpperCase();
star = upperStar;
console.log(star);