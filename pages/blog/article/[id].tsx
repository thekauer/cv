import { useEffect, useState } from 'react';

import formatDate from '../../../util';
import {BlogItem} from '..'
import styled from 'styled-components';
import { MD } from '../../../components/MD';
import { Button } from '../../../components/BlogCard';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { fetchPost } from 'firebase';

export const BlogArticleContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const StyledBlogArticle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    justify-self:center;
    background-color: var(--theme-dark);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);   
    border-radius: 5px;
    border:solid 2px black; 
    overflow: hidden;
    transition: var(--transition-time);
    margin: 2em 0;
    max-width:768px;
    & h1 {
        font-size:2.5em;
    }
`
export const Cover = styled.img`
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-bottom: solid 2px black;
`

export const Description = styled.div`
    padding:1em;
    padding-top: 0.5em;
    & p {
        word-wrap: break-word;
        max-width: 300px;
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
export const getServerSideProps: GetServerSideProps = async context => {
    const {id} = context.params as any;
    const items = fetchPost(id);
    return { props: {posts:JSON.stringify(items)} };
}


const BlogArticle = () =>  {
    const router = useRouter();
    const [item, setItem] = useState<BlogItem |null>(null);
    useEffect( () => {

    }, [])

    const createArticle = () => {
        if(item!=null) {
            return (
            <>
            <BlogArticleContainer>
            <StyledBlogArticle>
            <Cover src={item.image} />
            <Description>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <MD content={item.content}/>
            </Description>
            <Footer>
                <div>
                    {formatDate(new Date(item.date))}
                </div>
            <Button onClick={() => {router.back()} }>Vissza</Button>  
            </Footer>
            </StyledBlogArticle>
            </BlogArticleContainer>
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