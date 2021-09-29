import { combineReducers } from "redux";
import getPosterURL from "../modules/getPosterURL";

import {
    ADD_MOVIES,
    TOGGLE_LIKED,
    TOGGLE_BLOCKED,
} from './actions';

let currId = 0;
function moviesReducer(state= [], action) {
    switch (action.type) {
        case ADD_MOVIES:
            return action.movies.map(movie => {
                const poster_url = getPosterURL(movie.poster_path)
                let movie_toadd = {
                    title: movie.original_title,
                    language: movie.original_language,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    rate: movie.vote_average,
                    poster_url,
                }
                return {
                    movie: movie_toadd,
                    id: currId++,
                    liked: false,
                    blocked: false,
                }
            });
        case TOGGLE_LIKED:
            return state.map(movie => (
                movie.id === action.id ? {
                    ...movie,
                    liked: !movie.liked
                } : movie
            ));
        case TOGGLE_BLOCKED:
            return state.map(movie => (
                movie.id === action.id ? {
                    ...movie,
                    blocked: !movie.blocked
                } : movie
            ));
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;