import styled from "@emotion/styled";
import { connect } from "react-redux";
//import { useDispatch } from "react-redux";

import {
    toggleLiked,
    toggleBlocked
} from '../redux/actions';

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 10px;
    width: 100%;
`;

const Button = styled.button`
    float: right;
    padding: 7px;
    margin-right: 10px;
    font: inherit;
    box-shadow: 2px 2px 2px gray;
    border-radius: 5px;
    border: none;
    transition: box-shadow 0.5s, background-color 0.5s, color 0.5s;

    :hover:enabled {
        box-shadow: 0px 0px 10px red;
        background-color: black;
        color: red;
    }
`;

function Buttons({liked, blocked, toggle_blocked, toggle_liked}) {
    return (
        <ButtonContainer>
            <Button 
             disabled={liked} 
             onClick={toggle_blocked}>
                 {blocked? 'Cancel Block' : 'Block'}
            </Button>
            <Button
             disabled={blocked}
             onClick={toggle_liked}
            >
                {liked? 'Cancel Like' : 'Like'}
            </Button>
        </ButtonContainer>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggle_liked: () => dispatch(toggleLiked(ownProps.id)),
        toggle_blocked: () => dispatch(toggleBlocked(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Buttons);

// function Buttons({id, type, liked, blocked}) {
//     const dispatch = useDispatch();

//     function likeButtonHandler(id) {
//         const action = toggleLiked(id);
//         dispatch(action);
//     }

//     function blockButtonHandler(id) {
//         const action = toggleBlocked(id);
//         dispatch(action);
//     }

//     return (
//         <ButtonContainer>
//             <Button 
//              disabled={liked} 
//              onClick={()=>blockButtonHandler(id)}>
//                  {blocked? 'Cancel Block' : 'Block'}
//             </Button>
//             <Button
//              disabled={blocked}
//              onClick={()=>likeButtonHandler(id)}
//             >
//                 {liked? 'Cancel Like' : 'Like'}
//             </Button>
//         </ButtonContainer>
//     );
// }