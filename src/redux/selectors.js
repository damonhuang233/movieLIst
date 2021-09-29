import { VisibilityFilters } from "./actions";

export function getMovies(state) {
    return state.movies;
}

export function getVisibilityFilter(state) {
    return state.visibilityFilter;
}

export function getMoviesByActiveFilter(state, activeFilter) {
    const movies = getMovies(state);
    switch (activeFilter) {
        case VisibilityFilters.SHOW_LIKED:
            return movies.filter(movie => movie.liked);
        case VisibilityFilters.SHOW_BLOCKED:
            return movies.filter(movie => movie.blocked);
        case VisibilityFilters.SHOW_NOT_BLOCKED:
            return movies.filter(movie=> !movie.blocked);
        case VisibilityFilters.SHOW_ALL:
        default:
            return movies;
    }
}