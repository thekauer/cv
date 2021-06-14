import styled from "styled-components";

const Text = styled.div`
    max-width: 600px;
    margin-bottom: 2em;
    position: relative;
    @media (max-width:800px) {
        & {
            top:5em;
        }
    }
`

export default Text;