import styled from "styled-components";

const Box = styled.div`
    width: 18em;
    height: 18em;
    grid-column: 1;
    padding:3em;
    background-color: var(--theme-mid);
    border-radius: 8px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 1px 0 16px #363100;
    align-self: center;

    &#box1 h2 {
        font-size:1.5em;
    }
    @media (max-width:400px) {
        & {
        width: 12em;
        height: 60%;
        }
    }
`
const GearBox = styled(Box)`
    height: 50%;
    & h2 {
        font-size: 1.5em !important;
        margin:0 auto;
        position: relative;
        top:-6em;   
        margin-bottom: -4em;
    }
`
export {Box,GearBox};