import styled from "styled-components"

interface CarouselProps {
    imgs : string[];
    length : number;
}
export const Carousel = styled.div<CarouselProps>`
    box-shadow: 0 0 32px black;
    border-radius:15px;
    margin:2em;
    align-self: center;
    width:90%;
    max-width:640px;
    min-height:300px;
    height:100%;
    max-height: 480px;
    background-size:contain;
    animation: Carousel ${props => props.length}s ease infinite forwards;

    @keyframes Carousel {
        ${props => props.imgs.map((img,idx)=>`${(100/props.imgs.length*idx)}% {
            background: url(${img});
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
        }
        ${(100/props.imgs.length*(idx+1))-5}% {
            background: url(${img});
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
        }

        `)
        }
        100% {
            background: url(${props => props.imgs[0]});
            background-position:center;
            background-size:cover;
        }
    }
`