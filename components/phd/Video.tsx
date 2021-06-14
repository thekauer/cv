import styled from "styled-components";

const Video = styled.section`
    display: flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:4em;
    margin:4em 1em;
    & h2 {
        margin-bottom: 0.5em;
    }
    & video {
        border:solid 8px var(--yellow);
        border-radius: 2px;
        width: 100%;
        max-width: 480px;
        box-shadow: 1px 0px 16px #131100;
        object-fit: fill;
    }
`

export default Video;