import '../../index.css'
import './BlogCardContainer.css'
import React from 'react';

const BlogCardContainer : React.FC<any> = (props) => {
    return (
        <div className="blogCardContainer">{props.children}</div>
    );
}

export default BlogCardContainer;