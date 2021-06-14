import styled from "styled-components";

const StyledPhd = styled.article`
    & * {
        color:var(--active-font-color);
    }
    & .gear {
        position: relative;
        width: 75%;
        transform-origin:  center center;
        animation-name: gearSpin;
        animation-duration: 3s;
        animation-direction: normal;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    & .gear  #outline,#circle,#line {
        fill:none;
        stroke-width: 5px;
        stroke-miterlimit: 10px;
        stroke-linecap: round;
        stroke:black;
    }
    & .gray-gear #inside {
        fill:#C6C6C6;
    }
    & .gray-gear #outside {
        fill:#969696;
    }

    & .yellow-gear #inside {
        fill:#8b6b00;
    }
    & .yellow-gear #outside {

        fill:#ffd546;
    }
    & .blue-gear #inside {
        fill:#3774a7;

    }
    & .blue-gear #outside {
        fill:#003c6d;
    }


    & .blue-gear {
        animation-duration: 3s;
        animation-direction: reverse;
        left:-1em;
        top:-1em;
    }
    & .yellow-gear {
        animation-duration: 3s;
        width: 50%;
        left:10.5em;
        top:-7em;
    }
    & .gray-gear {
        animation-duration: 3s;
        animation-delay: -100ms;
        width: 25%;
        animation-direction: reverse;
        left:7.6em;
        top:-10em;
    }
    @media (max-width:400px) {
        & .blue-gear {
            left:-10%;
            top:-25%;
        }
        & .yellow-gear {
            left:52%;
            top:-60%;
        }
        & .gray-gear {
            left:34%;
            top:-80%;
        }
    }
    @keyframes gearSpin {
        0% {
            transform: none;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    & #arrow3 {
        grid-row:1;
        grid-column: 3;
        justify-self: center;
        align-self: center;
    }

    & #arrow4 {
        grid-row:2;
        grid-column: 2;
        justify-self: center;
        align-self: center;
    }
    @media (max-width:960px) {
        & #arrow3 {
            grid-row:1;
            grid-column: 1;
        }

        & #arrow4 {
            grid-row: 3;
            grid-column: 1;
            transform: rotate(-90deg) !important;
        }
    }

`

export default StyledPhd;