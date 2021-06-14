import styled from "styled-components"

const Grid = styled.div`
    align-self: center;
    display:grid;
`

const Line = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & img {
        margin-right:1em;
        width: 30%;
    }
    & div {
        margin:1em;
        margin-left: 2em;
    }
`

const Recog = styled.section`
    padding:3em;
    display:grid;
    align-items: center;
    justify-content: center;
    & .right-arrow #path {
        fill:var(--yellow);
    }
`

const YoloCpu = styled.div`
    grid-row:2;
    grid-column: 3;
    & img {
        max-width:90%;
    }
    @media (max-width:960px) {
        &  {
            grid-row:2;
            grid-column: 1;
        }
    }
`

const DrawContainer = styled.div`
    grid-row:2;
    grid-column: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width:960px) {
        & {
            grid-row:4 !important;
            grid-column: 1;
        }
    }
`


export {Grid,Line,Recog,YoloCpu,DrawContainer};