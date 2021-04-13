import { useEffect, useState } from 'react';
import '../../index.css'
import formatDate from '../../util';
import {BlogItem} from '../Blog/Blog'
import styled from 'styled-components';

const StyledBlogArticle = styled.div`
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--theme-dark);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);   
    border-radius: 5px;
    border:solid 2px black; 
    overflow: hidden;
    transition: var(--transition-time);
    margin: 2em 4em;
`
const Cover = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-bottom: solid 2px black;
`

const Description = styled.div`
    padding:1em;
    padding-top: 0.5em;
`
const P = styled.p`
    word-wrap: break-word;
    max-width: 300px;
    min-height: 4em;
    padding: 0;
`
const Footer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding:0 1em 1em 0.5em;
    margin:0 0.5em;
`

const BlogArticle = (props : any) =>  {

    const [item, setItem] = useState<BlogItem |null>(null);
    useEffect( () => {
        setItem(props.history.location.state.item);
    }, [])

    const createArticle = () => {
        if(item!=null) {
            return (
            <>
            <StyledBlogArticle>
            <Cover src={item.image} />
            <Description>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <P dangerouslySetInnerHTML={{__html: item.content}} />
            <button onClick={() => {props.history.goBack();} }>go back {props.history.length}</button>
            </Description>
            <Footer>
                <div>
                    {formatDate(item.date)}
                </div>
            </Footer>
            </StyledBlogArticle>

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