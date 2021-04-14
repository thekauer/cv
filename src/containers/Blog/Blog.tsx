import '../../index.css'
import BlogCardContainer from '../BlogCardContainer/BlogCardContainer';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogHighlight from '../../components/BlogHighlight/BlogHighlight';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import formatDate from '../../util';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';


const StyledBlog = styled.article`
    max-width: 100%;
    height: 100%;
    padding: 1.5em 2.5em;
`
const PlaceHolder = styled.div`
    height: 50px;
    width: auto;
`
export interface BlogItem {
    content: string,
    desc: string,
    image: string,
    title: string,
    date: Date,
    id: string
}

const Blog = (props: any) => {

    const [posts, setPosts] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const postsRef = db.collection('blog');
        postsRef.onSnapshot((querySnapshot) => {
            const items: BlogItem[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                const item: any = {
                    ...data,
                    date: data.date.toDate(),
                    id: doc.id
                }
                items.push(item);
            });
            setPosts(items);
            setLoading(false);
        });
    }, []

    );




    const handleReadClicked = (item: BlogItem) => {
        props.history.push({ pathname: `/blog/article/${item.id}`, state: { item: item } });
    }

    const createBlogFeed = () => {
        const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime())
        const blogItems = sortedPosts.map((post) => {
            const p = {
                ...post
            }

            return (
                <BlogCard title={p.title} desc={p.desc} date={formatDate(p.date)} image={p.image} item={p} click={handleReadClicked} />
            )
        });

        const hl = [];
        if (sortedPosts.length > 0) {
            hl.push(<BlogHighlight title={sortedPosts[0].title} image={sortedPosts[0].image} item={sortedPosts[0]} click={handleReadClicked} />);
        }

        return (
                <>
                {hl}
                <BlogCardContainer>
                    {blogItems}
                </BlogCardContainer>
                </>
        );
    }

    const skeleton = (
        <>
            <BlogHighlight title={null} image={null} item={null} click={handleReadClicked} />
            <BlogCardContainer>
                <BlogCard title={null} image={null} item={null} click={handleReadClicked} desc={null} date={null} />
                <BlogCard title={null} image={null} item={null} click={handleReadClicked} desc={null} date={null} />
                <BlogCard title={null} image={null} item={null} click={handleReadClicked} desc={null} date={null} />
                <BlogCard title={null} image={null} item={null} click={handleReadClicked} desc={null} date={null} />
            </BlogCardContainer>
        </>
    )
    return (
        <>
            <Helmet>
                <title>Blog - Kauer András</title>
            </Helmet>
            <StyledBlog>
            {loading ? skeleton : createBlogFeed()}
            <PlaceHolder />
            </StyledBlog>
        </>
    );
}

export default Blog;