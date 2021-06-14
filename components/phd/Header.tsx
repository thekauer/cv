import styled from "styled-components";

const Header = styled.header`
background-color: var(--yellow);
color:var(--active-font-color);
padding: 0 2em;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-bottom: 20em;

& em {
    font-size: 1.5em;
}

& img {
    width: 100%;
    height: 100%;
    min-width:300px;
    max-width: 310px;
    border:solid 8px white;
    position: relative;
    box-shadow: 1px 0 16px #1b1900;
    object-fit: cover;
    bottom:-15em;
}
@media (max-width:800px) {
& {
    flex-direction: column;
    justify-content: center;
}
}
`

export default Header;