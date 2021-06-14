import styled from "styled-components";

const PhdImage = styled.div`
    width: 100%;
    height: 100%;
    min-width:300px;
    max-width: 310px;
    border:solid 8px white;
    background-color:white;
    position: relative;
    box-shadow: 1px 0 16px #1b1900;
    object-fit: cover;
    bottom:-15em;
    & * {
        display:block !important;
    }
`

export default PhdImage;