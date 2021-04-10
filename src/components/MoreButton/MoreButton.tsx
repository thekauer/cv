import { useHistory } from 'react-router';
import '../../index.css';
import './MoreButton.css';


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
            <button onClick={handleClick} className="MoreButton">Read More</button>
        </>
    );
}