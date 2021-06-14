import { useEffect, useState } from 'react';

import formatDate from '../../../util';
import styled from 'styled-components';
import { MD } from '@components/MD';
import { Button } from '@components/BlogCard';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import {useFetchPost} from '@hooks/useFetchPost'

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
    margin: 2em 1em;
    & h1 {
        font-size:2.5em;
    }
    max-width:90%;
`
interface CoverProps {
    src :string
}
export const Cover = styled.div<CoverProps>`
    height:300px;
    width: 100%;
    object-fit: cover;
    border-bottom: solid 2px black;
    background: url(data:image/png;base64,${props=>props.src});
`

export const Description = styled.div`
    padding:4em;
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
    const {id}  = context.params as any;
    return { props: {id:id as string} };
}


const BlogArticle = ({id}:{id:string}) =>  {
    const router = useRouter();
    const item = useFetchPost(id);
    const createArticle = () => {
        if(item) {
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