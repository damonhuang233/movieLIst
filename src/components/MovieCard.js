import styled from "@emotion/styled";

import Buttons from "./Buttons";

const CardContainer = styled.div`
    position: relative;
    min-width: 280px;
    min-height: 550px;
    width: 280px;
    height: 550px;
    margin: 10px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 10px gray;
    border-radius: 10px;
    transition: box-shadow 0.5s, background-color 2s, color 1s;

    p {
        font-size: 18px;
        margin: 10px 15px;
    }

    :hover {
        box-shadow: 0px 0px 15px #39FF14;
        background-color: black;
        color: white;

        img {
            height: 350px;
            box-shadow: none;
        }
    }
`;

const Poster = styled.img`
    height: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 5px 5px 5px gray;
    border-radius: 10px;
    transition: height 2s, box-shadow 0.5s;
`;

function MovieCard({movie, type}){
    const movie_info = movie.movie;
    const movie_id = movie.id;
    const liked = movie.liked;
    const blocked = movie.blocked;

    return (
        <CardContainer>
            <p>Title: {movie_info.title}</p>
            <abbr title={movie_info.overview}>
                <Poster src={movie_info.poster_url}/>
            </abbr>
            <p>Language: {movie_info.language}</p>
            {/* <p>Overview: {movie_info.overview}</p> */}
            <p>Rate: {movie_info.rate}/10</p>
            <p>Release date: {movie_info.release_date}</p>
            <Buttons id={movie_id} type={type} liked={liked} blocked={blocked}/>
        </CardContainer>
    );
}

export default MovieCard;