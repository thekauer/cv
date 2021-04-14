import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import firebase, { auth, isMe, db } from '../../firebase'
import '../../index.css';
import {AddAdminBlogCard, AdminBlogCard} from '../../components/AdminBlogCard/AdminBlogCard'
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const StyledAdmin = styled.article`
    & header {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:5em 0;
    }
`
const Posts = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:2em 0;
`
export interface AdminBlogItem {
    content: string,
    desc: string,
    image: string,
    title: string,
    date: Date,
    id: string,
    highlighted? :boolean
}

export const Admin = () => {
    let history = useHistory();
    const postsRef = db.collection('blog');
    const [posts, setPosts] = useState<AdminBlogItem[]>([]);

    const fetchPosts = () => {
        const items: AdminBlogItem[] = [];
        postsRef.limit(10).onSnapshot((snapshots) => {
            snapshots.forEach((doc) => {
                const data = doc.data()
                const item: AdminBlogItem|any = {
                    ...data,
                    date: data.date.toDate(),
                    id: doc.id,
                    highlighted:false
                }
                items.push(item);
            })
            const sortedPosts = items.sort((a, b) => b.date.getTime() - a.date.getTime());
            if(sortedPosts.length>0) sortedPosts[0].highlighted=true;
            setPosts(sortedPosts);
        });
    }

    const [admin, setAdmin] = useState<firebase.User | null>(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (isMe(user?.uid)) {
                setAdmin(user);
                fetchPosts();
            } else {
                setAdmin(null);
                history.push('/')
            }
        })
    }, []);
    if (admin == null) {
        return (
            <h1>Nope</h1>
        );
    }


    const blogItems = posts.map((post) => {
        const p = {...post};
        return (
            <div className="post">
                <Fade triggerOnce>
                <AdminBlogCard {...p} />
                </Fade>
            </div>
        )
    });
    return (
        <>
            <StyledAdmin>
                <header><h1>Hey {admin.displayName?.split(' ').reverse()[0]}</h1></header>
                <section>
                    <header><h2>Postok</h2></header>
                    <Posts>
                        <AddAdminBlogCard/>{blogItems}
                    </Posts>
                </section>
            </StyledAdmin>
        </>
    );
}