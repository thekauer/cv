import '../../index.css'
import React from 'react';
import styled from 'styled-components';

const StyledBlogCardContainer = styled.div`
    max-height: 1000px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
`
const BlogCardContainer : React.FC<any> = (props) => {
    return (
        <StyledBlogCardContainer>{props.children}</StyledBlogCardContainer>
    );
}

export default BlogCardContainer;