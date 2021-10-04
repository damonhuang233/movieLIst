import styled from "@emotion/styled";
//import { useSelector } from "react-redux";
import { useRef } from "react";
import { connect } from "react-redux";

//import { getMoviesByActiveFilter } from "../redux/selectors";
//import { VisibilityFilters } from "../redux/actions";
//import store from "../redux/store";

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
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`;

const Title = styled.h1`
    margin-left: 15px;
`;

const Main = styled.div`

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

const ScrollButton = styled.div`
    position: fixed;
    top: 40%;
    right: ${props=>props.right? '20px' : 'none'};
    left: ${props=>props.left? '20px' : 'none'};
    z-index: 1;
    min-height: 24%;
    min-width: 5%;
    border-radius: 20%;
    background: url(${props => props.left ? 'backward.svg' : 'forward.svg'});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-color: whitesmoke;
    opacity: 0.2;
    box-shadow: 0px 0px 5px green;
    transition: opacity 0.2s;

    :hover {
        opacity: 0.8;
    }
`;

function MovieList({type, title, movies}) {
    const ref = useRef(null);
   
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <Main>
            <Title> {title} </Title>
            <MoviesContainer ref={ref}>
                <ScrollButton left onClick={() => scroll(-500)}></ScrollButton>
                <ScrollButton right onClick={() => scroll(500)}></ScrollButton>
                {movies.length > 0 ? <></> : <EmptyText><p>Empty</p></EmptyText> }
                {movies.map(movie=> <MovieCard key={movie.id} movie={movie} type={type}/>)}
            </MoviesContainer>
        </Main>
    );
}

function mapStateToProps(state, ownProps) {
        const all_movies = state.movies;
        let movies;
        switch(ownProps.type) {
            case ListTypes.TRENING:
                movies = all_movies.filter(movie => !movie.blocked);
                break;
            case ListTypes.LIKED:
                movies = all_movies.filter(movie => movie.liked);
                break;
            case ListTypes.BLOCKED:
                movies = all_movies.filter(movie => movie.blocked);
                break;
            default:
                movies = all_movies;
        }
    
        const title = ownProps.type;

        return { movies, title }
}

export default connect(mapStateToProps)(MovieList);

    // function MovieList({type}) {
    //     let state = store.getState();
    //     const ref = useRef(null);
    //     let activeFilter;
    //     switch(type) {
    //         case ListTypes.TRENING:
    //             activeFilter = VisibilityFilters.SHOW_NOT_BLOCKED;
    //             break;
    //         case ListTypes.LIKED:
    //             activeFilter = VisibilityFilters.SHOW_LIKED;
    //             break;
    //         case ListTypes.BLOCKED:
    //             activeFilter = VisibilityFilters.SHOW_BLOCKED;
    //             break;
    //         default:
    //             activeFilter = VisibilityFilters.SHOW_ALL;
    //     }
    
    //     const movies = useSelector(()=>getMoviesByActiveFilter(state, activeFilter));
    //     const title = type;
    
    //     const scroll = (scrollOffset) => {
    //         ref.current.scrollLeft += scrollOffset;
    //       };
    
    //     return (
    //         <Main>
    //             <Title> {title} </Title>
    //             <MoviesContainer ref={ref}>
    //                 <ScrollButton left onClick={() => scroll(-500)}></ScrollButton>
    //                 <ScrollButton right onClick={() => scroll(500)}></ScrollButton>
    //                 {movies.length > 0 ? <></> : <EmptyText><p>Empty</p></EmptyText> }
    //                 {movies.map(movie=> <MovieCard key={movie.id} movie={movie} type={type}/>)}
    //             </MoviesContainer>
    //         </Main>
    //     );
    // }