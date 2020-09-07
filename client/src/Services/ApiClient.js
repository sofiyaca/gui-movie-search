// API key to access the db is saved as an environment variable
const BASE_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=`;

function getMovies(params) {
  return fetchRequest(params);
}

function fetchRequest(params) {
  return fetch(BASE_URL + params)
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => console.log(`Error fetching params ${params}`, err));
}

export default {
  getMovies,
};
