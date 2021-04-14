import { useHistory } from 'react-router';
import styled from 'styled-components';
import '../../index.css';


const Button = styled.button`
    border: solid 3px #2e2e2e;
    border-radius: 1px;
    background: #58585833;
    padding:0.5em;
    color:var(--font-color); 
    transition: var(--transition-time);
    font-weight:bold;   
    &:hover {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.5),0 0 5px black;
    }
`
interface MoreButtonProps {
    to: string
}
export const MoreButton = ({ to }: MoreButtonProps) => {
    let history = useHistory();
    const handleClick = () => {
        history.push(to);
    }
    return (
        <>
            <Button onClick={handleClick} className="MoreButton">Több</Button>
        </>
    );
}