const url = 'https://image.tmdb.org/t/p/w500';

export default function getPosterURL(path) {
    return url.concat(path);
}