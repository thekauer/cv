
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React from 'react';
import { BlogItem } from '@pages/blog';
import styled from 'styled-components';



export const Card = styled.div`
    width: 40ch;
    margin:0 2em;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--theme-dark);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);   
    border-radius: 5px;
    border:solid 2px var(--nav-border); 
    overflow: hidden;
    margin: 1em 2em;
    transition: var(--transition-time);
    &:hover {
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.5);  
    }
`

export const Cover = styled.img`
    width: 100%;
    height:100px;
    max-height: 100px;
    border-bottom: solid 2px var(--nav-border);
    object-fit: cover;
`

export const Description = styled.div`
    padding:1em;
    padding-top: 0.5em;
    & h1 {
        font-size:2em;
    }
    & p {
        word-wrap: break-word;
        max-width: 30ch;
        min-height: 4em;
        padding: 0;
    }
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding:0 1em 1em 0.5em;
    margin:0 0.5em;
`
export const Button = styled.button`
    border: solid 3px #2e2e2e;
    border-radius: 1px;
    background: transparent;
    padding:0.5em;
    color:var(--font-color); 
    transition: var(--transition-time);
    font-weight:bold;  
    margin:0 0.5em;
    &:hover {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.5),0 0 5px black;
    }
`





interface BlogCardProps {
    image : string | null,
    title : string | null,
    desc : string | null,
    date : string | null,
    click :  (item : BlogItem) => void | null,
    item : any | null
};
const BlogCard : React.FC<BlogCardProps|null> = ({image,title,desc,date,click,item}) => {
    return (
        <Card>
            <SkeletonTheme color="#888" highlightColor="var(--font-color)">
            {image?<Cover src={image} alt="cover"/> : <Skeleton height={100} />}
            <Description>
            <h1>{title || <Skeleton width={100}/>}</h1>
            <p>{desc || <Skeleton count={4}/>}</p>
            </Description>
            <Footer>
                <div className="date">
                    {date || <Skeleton/>}
                </div>
                <Button onClick={() => {if(click!=null && item!=null){click(item)}}}>Több</Button>
            </Footer>
            </SkeletonTheme>
        </Card>

    );
}

export default BlogCard;