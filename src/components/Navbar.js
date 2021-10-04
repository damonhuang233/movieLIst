import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavDiv = styled.div`
    min-height: 100px;
    width: auto;
    background-color: black;
    border-radius: 5px;
    color: white;
    box-shadow: 0px 0px 10px red;
    padding-right:10px;
`;

const LogoDiv = styled.div`
    margin: 0;
    padding: 0;
    margin-left: 20px;
    float: left;
    height: 100px;
    width: auto;

    img {
        height: 80px;
        padding-top: 10px;
    }
`;

const TextDiv = styled.div`
    margin: 0;
    padding: 0;
    float: left;
    height: 100px;
    width: auto;

    span {
        display: inline-block;
        font-size: 50px;
        padding-top: 25px;
        text-shadow: 2px 2px 2px red, 4px 4px 2px blue, 6px 6px 2px green;
    }
`;

const Links = styled.div`
    float: right;
    height: 50px;
    width: 50px;
    margin-left: 10px;
    margin-top: 25px;
    background: url(${props=>props.blocked ? './block.svg' : props.liked ? './liked.svg' : './trending.svg'});
    background-repeat: no-repeat;
    background-size: cover;
    transition: margin-top 0.5s, height 0.5s, width 0.5s;
    
    :hover {
        margin-top: 15px;
        height: 70px;
        width: 70px;
    }
`;

function Navbar() {
    return (
        <NavDiv>
            <LogoDiv>
                <img src={'./logo.svg'} alt={'logo'}/>
            </LogoDiv>
            <TextDiv>
                <span>MovieList</span>
            </TextDiv>
            <abbr title={'Blocked'}>
                <Link to='/blocked'><Links blocked></Links></Link>
            </abbr>
            <abbr title={'Liked'}>
                <Link to='/liked'><Links liked></Links></Link>
            </abbr>
            <abbr title={'Trending'}>
                <Link to='/'><Links></Links ></Link>
            </abbr>
        </NavDiv>
    );
}   

export default Navbar;