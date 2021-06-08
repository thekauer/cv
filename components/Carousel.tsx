import styled from "styled-components"

interface CarouselProps {
    imgs : string[];
    length : number;
}
export const Carousel = styled.div<CarouselProps>`
    box-shadow: 0 0 32px black;
    border-radius:15px;
    margin:1em;

    width:clamp(320px,100%,640px);
    height:clamp(240px,360px,480px);
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