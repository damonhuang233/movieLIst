const API_KEY = 'get your own api key at https://api.themoviedb.org';

let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

async function fetchMovies() {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export default fetchMovies;