import { useEffect, useState } from 'react';
import '../../index.css'
import './BlogArticle.css'
import formatDate from '../../util';
import React from 'react';
import {BlogItem} from '../Blog/Blog'

const BlogArticle = (props : any) =>  {

    const [item, setItem] = useState<BlogItem |null>(null);
    useEffect( () => {
        setItem(props.history.location.state.item);
    }, [])

    const createArticle = () => {
        if(item!=null) {
            return (
            <>
            <div className="blog-article">
            <img src={item.image} alt="cover"></img>
            <div className="blog-article-desc">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <p dangerouslySetInnerHTML={{__html: item.content}} />
            <button onClick={() => {props.history.goBack();} }>go back {props.history.length}</button>
            </div>
            <div className="blog-article-footer">
                <div className="date">
                    {formatDate(item.date)}
                </div>
            </div>
            </div>

            </>
            );
        }
    }

        return (
        <>
            {createArticle()}
        </>
        );
}

export default BlogArticle;