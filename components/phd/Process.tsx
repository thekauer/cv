import styled from "styled-components";

const Process = styled.section`
    padding: 5em;
    display:flex;
    justify-content:center;
    background-color: var(--yellow);
    box-shadow: inset 0 10px 16px black;

    & span {
        font-size: 3em;
    }
    & #box1 {
        grid-column: 1;
        grid-row:1
    }
    & #box2 {
        grid-column: 3;
        grid-row:1;
    }

    & #box3 {
        grid-column: 5;
        grid-row:1;
    }
    & #arrow1 {
        grid-column: 2;
        grid-row:1;
        align-self: center;
        justify-self: center;
    } 
    & #arrow2 {
        grid-column: 4;
        grid-row:1;
        align-self: center;
        justify-self: center;
    }
    @media (max-width:1430px) {
        & #box3 {
            grid-row:3;
            grid-column: 3;
        }
        & #arrow2 {
            grid-row:2;
            grid-column: 3;
            transform: rotate(90deg) !important;
        }
    }
    @media (max-width:915px) {
        & #box2 {
            grid-row:3;
            grid-column: 1;
        }
        & #arrow1 {
            grid-row:2;
            grid-column: 1;
            transform: rotate(90deg) !important;
        }
        & #box3 {
            grid-row:5;
            grid-column: 1;
        }
        & #arrow2 {
            grid-row:4;
            grid-column: 1;
            transform: rotate(90deg) !important;
        }
    }

`
export default Process;