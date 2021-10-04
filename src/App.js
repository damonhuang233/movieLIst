import { useEffect } from "react";
import { Route, Switch } from "react-router";
import styled from "@emotion/styled";

import fetchMovies from "./modules/fetchMovies";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

import { addMovies } from "./redux/actions";
import { useDispatch } from "react-redux";

import { ListTypes } from "./modules/listTypes";

const NotFound = styled.div`
  font-family:inherit;
  font-size: 50px;
  margin-top: 100px;
  margin-left: 100px;
`;

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
      <Navbar />
      <Switch>
        <Route exact path={'/liked'}>
         <MovieList type={ListTypes.LIKED} />
        </Route>
        <Route exact path={'/blocked'}>
         <MovieList type={ListTypes.BLOCKED} />
        </Route>
        <Route exact path={'/'}>
         <MovieList type={ListTypes.TRENING} />
        </Route>
        <Route path={'/'}>
         <NotFound>404 NOT FOUND...</NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
