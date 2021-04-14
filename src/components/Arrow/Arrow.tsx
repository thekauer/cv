import styled from 'styled-components';
import '../../index.css'


const Svg = styled.svg<any>`

`
const Path = styled.path`

`
const StyledArrow = styled.div<any>`
    & svg {
        width: 8em;
        height: 8em;
        transform:rotate(${props=>props.rotate}deg);
    }
    & path {
        fill:var(--theme-mid);
    animation-name: moveRight;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-direction:normal;
    }
    @keyframes moveRight {
    0% {
        transform: none;
        opacity: 1;
    }
    50% {
        transform: translateX(100%);
        opacity: 0;
    }
    51% {
        transform: translate(-100%);
    }
    100% {
        transform: none;
        opacity: 1;
    }
    }
`
interface ArrowProps {
    id? : string
    deg? : number
}
export const Arrow: React.FC<ArrowProps> = ({ id,deg = 0 }) => {
    return (
        <StyledArrow id={id} rotate={deg} className="right-arrow">
        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" id="path" />
        </svg>
        </StyledArrow>
    );
}