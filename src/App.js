import { useEffect } from "react";

import fetchMovies from "./modules/fetchMovies";
import MovieList from "./components/MovieList";

import { addMovies } from "./redux/actions";
import { useDispatch } from "react-redux";

import { ListTypes } from "./modules/listTypes";

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    const movies = fetchMovies();
    movies.then(movies => {
        const add_movie_action = addMovies(movies);
        dispatch(add_movie_action);
      });
  }, [dispatch]);

  return (
    <div>
      <MovieList type={ListTypes.TRENING} />
      <MovieList type={ListTypes.LIKED} />
      <MovieList type={ListTypes.BLOCKED} />
    </div>
  );
}

export default App;
