import '../../index.css';
import './BlogHighlight.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React from 'react';
import { BlogItem } from '../../containers/Blog/Blog';

interface BlogHighlightProps {
    image : string | null,
    title : string | null,
    click :  (item : BlogItem) => void,
    item : any
};

const BlogHighlight : React.FC<BlogHighlightProps> = ({title,image,click,item}) => {
    return (
        <div className="blog-highlight">
        <SkeletonTheme color="#888" highlightColor="var(--font-color)">
        {image?<img src={image} alt="cover"></img> : <Skeleton height={300}/>}
        <h1 onClick={ () => {if(click&&item){click(item)} }}>{title || <Skeleton />}</h1>
        </SkeletonTheme>
        </div>
    );
}

export default BlogHighlight;