import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import { getMoviesByActiveFilter } from "../redux/selectors";
import { VisibilityFilters } from "../redux/actions";
import store from "../redux/store";

import MovieCard from "./MovieCard";
import { ListTypes } from "../modules/listTypes";

const MoviesContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    min-height: 550px;
    overflow: auto;
    padding: 10px;
    background-color: black;
    box-shadow: 0px 0px 10px black;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const Title = styled.h1`
    margin-left: 15px;
`;

const Main = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
`;

const EmptyText = styled.div`
    color: white;
    width: 100%;
    text-align: center;
    font-style: inherit;
    font-size: 50px;
    margin-top: auto;
    margin-bottom: auto;
`;

function MovieList({type}) {
    let state = store.getState();
    let activeFilter;
    switch(type) {
        case ListTypes.TRENING:
            activeFilter = VisibilityFilters.SHOW_NOT_BLOCKED;
            break;
        case ListTypes.LIKED:
            activeFilter = VisibilityFilters.SHOW_LIKED;
            break;
        case ListTypes.BLOCKED:
            activeFilter = VisibilityFilters.SHOW_BLOCKED;
            break;
        default:
            activeFilter = VisibilityFilters.SHOW_ALL;
    }

    const movies = useSelector(()=>getMoviesByActiveFilter(state, activeFilter));
    const title = type;

    return (
        <Main>
            <Title> {title} </Title>
            <MoviesContainer>
                {movies.length > 0 ? <></> : <EmptyText><p>Empty</p></EmptyText> }
                {movies.map(movie=> <MovieCard key={movie.id} movie={movie} type={type}/>)}
            </MoviesContainer>
        </Main>
    );
}

export default MovieList;