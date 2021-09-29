export const ADD_MOVIES = 'ADD_MOVIES';
export const TOGGLE_LIKED = 'TOGGLE_LIKED';
export const TOGGLE_BLOCKED = 'TOGGLE_BLOCKED';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_LIKED: 'SHOW_LIKED',
    SHOW_BLOCKED: 'SHOW_BLOCKED',
    SHOW_NOT_BLOCKED: 'SHOW_NOT_BLOCKED'
}

export function addMovies(movies) {
    return { type: ADD_MOVIES, movies };
}

// TOGGLE_LIKED action:
// {
//     type: TOGGLE_LIKED,
//     id: id
// }

export function toggleLiked(id) {
    return { type: TOGGLE_LIKED, id };
}

// TOGGLE_BLOCKED action:
// {
//     type: TOGGLE_BLOCKED,
//     id: id
// }

export function toggleBlocked(id) {
    return { type: TOGGLE_BLOCKED, id };
}
