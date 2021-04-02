import '../../index.css'
import './BlogCard.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React from 'react';
import { BlogItem } from '../../containers/Blog/Blog';
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
        <div className="card">
            <SkeletonTheme color="#888" highlightColor="var(--font-color)">
            {image?<img src={image} alt="cover"></img> : <Skeleton height={100} />}
            <div className="blog-card-desc">
            <h1>{title || <Skeleton width={100}/>}</h1>
            <p>{desc || <Skeleton count={4}/>}</p>
            </div>
            <div className="blog-card-footer">
                <div className="date">
                    {date || <Skeleton/>}
                </div>
                <button onClick={() => {if(click!=null && item!=null){click(item)}}}>Read More</button>
            </div>
            </SkeletonTheme>
        </div>

    );
}

export default BlogCard;