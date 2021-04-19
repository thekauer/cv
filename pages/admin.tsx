import { useEffect, useState } from 'react';
import firebase, { auth, isMe, db } from '../firebase'
import {AddAdminBlogCard, AdminBlogCard} from '../components/AdminBlogCard'
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Router from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

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
export const getServerSideProps: GetServerSideProps = async context => {
    const postsRef = db.collection('blog');
    const items: AdminBlogItem[] = [];
    const snapshots = await postsRef.limit(10).orderBy('date','desc').get();
        snapshots.forEach((doc) => {
            const data = doc.data()
            const item: AdminBlogItem|any = {
                ...data,
                date:(data.date as firebase.firestore.Timestamp).toDate().toString(),
                id: doc.id,
                highlighted:false
            }
            items.push(item);
        });
    return { props: {posts:JSON.stringify(items)} };
}


const Admin = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const posts : any[] = JSON.parse(props.posts);
    if(posts.length>0) posts[0].highlighted=true;
    const [admin, setAdmin] = useState<firebase.User | null>(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (isMe(user?.uid)) {
                setAdmin(user);
            } else {
                setAdmin(null);
                Router.push('/')
            }
        })
    }, []);
    if (admin == null) {
        return (
            <h1>Nope</h1>
        );
    }

    const blogItems = posts.map((post : AdminBlogItem) => {
        const p = {...post,date:new Date(post.date)};
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
export default Admin;