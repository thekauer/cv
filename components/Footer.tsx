
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100%;
    color:var(--active-font-color);
    font-size: 0.8em;
    padding: 0.3em 0;
    font-family: Consolas,Arial, Helvetica, sans-serif;;
    background-color: var(--blue);
    display:flex;
    flex-direction: row;
`
const Right = styled.span<any>`
    padding: 0.3em 1em;
    color:white;
    justify-content: flex-end;
    ${props => props.leftmost && "margin-left: auto;"}
`
const Footer = () => {
    return (
    <StyledFooter>
        <Right leftmost>UTF-8</Right>
        <Right >CRLF</Right>
    </StyledFooter>
    );
}


export default Footer;