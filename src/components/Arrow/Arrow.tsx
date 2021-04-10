import '../../index.css'
import './Arrow.css'

interface ArrowProps {
    id? : string
    deg? : number
}
export const Arrow: React.FC<ArrowProps> = ({ id,deg = 0 }) => {
    return (
        <div id={id}>
        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" className="right-arrow" style={{transform:`rotate(${deg}deg)`}}>
            <path d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" id="path" />
        </svg>
        </div>
    );
}