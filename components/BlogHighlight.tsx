;
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React from 'react';
import { BlogItem } from '@pages/blog';
import styled from 'styled-components';


const StyledBlogHighLight = styled.div`
    border: solid 2px var(--nav-border);
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);   
    transition: var(--transition-time);
    margin-bottom: 2em;
    &:hover {
        box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.5);  
    }

    & h1 {
        cursor:pointer;
        transition: var(--transition-time);
        color: var(--font-color);
        padding: 0.3em 1em;
        font-size:2em !important;
    }
    & h1:hover {
        color: var(--active-font-color);
    }
    & img {
        max-height: 300px;
        width: 100%;
        object-fit: cover;
        border-bottom: solid 2px var(--nav-border);
    }

`
interface CoverProps {
    src:string
}
export const Cover = styled.div<CoverProps>`
    height:300px;
    border-bottom: solid 2px var(--nav-border);
    background: url(data:image/png;base64,${props=>props.src});
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
`
interface BlogHighlightProps {
    image : string | null,
    title : string | null,
    click :  (item : BlogItem) => void,
    item : any
};

const BlogHighlight : React.FC<BlogHighlightProps> = ({title,image,click,item}) => {
    return (
        <StyledBlogHighLight>
        <SkeletonTheme color="#888" highlightColor="var(--font-color)">
        {image?<Cover src={image}/> : <Skeleton height={300}/>}
        <h1 onClick={ () => {if(click&&item){click(item)} }}>{title || <Skeleton />}</h1>
        </SkeletonTheme>
        </StyledBlogHighLight>
    );
}

export default BlogHighlight;