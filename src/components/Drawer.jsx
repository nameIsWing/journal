import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Drawer = ({ drawn, details, clickHandler }) => {
    return (
        <Container drawn={drawn}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <h4>{drawn && details.heading}</h4>
                    <IconButton onClick={clickHandler} sx={{ml: 'auto'}}>
                        <AiOutlineCloseCircle color="var(--error)"/>
                    </IconButton>
                </div>
            
            <p style={{color:'var(--primary-color)'}}>Date: <b>{drawn && details.date}</b></p>
            <p>{drawn && details.body}</p>
        </Container>
    )
}

export default Drawer

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: ${ props => props.drawn ? 1 : 0};
    transform: ${ props => props.drawn ? 'translate(-50%, -50%)' : 'translate(-200%, -50%)'};
    /* margin: .75rem; */
    padding: .75rem;
    width: calc(100% - 1.125rem);
    height: calc(100% - 1.25rem);
    overflow-y: scroll;
    border-radius: .25rem;
    background-color: white;

    &::-webkit-scrollbar {
        width: .5rem;
        /* background-color: var(--grey-light4); */
    }
    &::-webkit-scrollbar-thumb {
        border-radius: .25rem;
        background-color: var(--grey-light3);
        
        &:hover {
            background-color: var(--grey-light2);
        }
    }

    h4 {
        margin: 0 1rem;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        transform: translateY(.375rem);
        color: var(--grey-main);
    }

    p {
        padding: 0 1.5rem;
        color: var(--grey-main);
    }
`