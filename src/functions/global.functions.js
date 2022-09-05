export let initialVariables = {
  moviesCount: [],
  actorsCount: [],
};

export function addMoviesContainer(data, key) {
  initialVariables[key].push(data);
  console.log(initialVariables[key].length);
  return initialVariables[key];
}

// function addActorsContainer(data, key) {
//   initialVariables[key] = data;
// }
