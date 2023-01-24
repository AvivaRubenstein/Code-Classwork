// Promise example using a real-life promise
// The real-life promise in this scenario is a child asking his parents for a Nintendo Switch

const choresDone = true;

// Promise
//"new Promise" -- Promise is our constructor function, and we are constructing a new object instance of a Promise called willGetSwitch
//This promise will take one value into it, and that value is a callback function which will return either resolve or reject

const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  return Promise.resolve(message);
};

//this can only happen once the promise has been resolved, 
//if it resolved we can continue on to playGames, otherwise it'll have an error
willGetSwitch
  .then(playGames)
  .then((resolved) => console.log(resolved)) //we are console logging out what got returned from the playGames function/promise
  .catch((err) => console.error(err));
