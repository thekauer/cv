import { useEffect, useState } from 'react';
import firebase, { auth, isMe, db } from '@utils/firebase'
import {AddAdminBlogCard, AdminBlogCard} from '../components/AdminBlogCard'
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import Router from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { MailBox, Message } from '../components/MailBox';
import { TrackChart } from '@components/TrackChart'

const StyledAdmin = styled.article`
    & header {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:5em 0;
    }
`
const Mails = styled.section`
    display:flex;
    flex-direction:column;
`
const Posts = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding:2em 0;
`

const MailboxContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:90%;
    align-self:center;
`
const Views = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
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

    
    return { props: {
        posts:JSON.stringify(items),
    } };
}

const Admin = (props:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [ messages, setMessages ] = useState<Message[]>();
    const getMessages = async () => {
        const mailRef = db.collection('mail');
        const snapshot = await mailRef.limit(40).orderBy('ticks','desc').get();
        const msgs = snapshot.docs.map(doc => doc.data() as Message);
        setMessages(msgs);
    }
    const posts : any[] = JSON.parse(props.posts);
    if(posts.length>0) posts[0].highlighted=true;
    const [admin, setAdmin] = useState<firebase.User | null>(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (isMe(user?.uid)) {
                setAdmin(user);
                getMessages();
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

    const blogItems = posts.map((post : AdminBlogItem,idx) => {
        const p = {...post,date:new Date(post.date)};
        return (
            <div className="post" key={idx}>
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
                <Views>
                    <header><h2>Megtekintések</h2></header>
                    <TrackChart/>
                </Views>
                <Mails>
                    <header><h2>Mail</h2></header>
                    <MailboxContainer>
                        <MailBox messages={messages ?? []}/>
                    </MailboxContainer>
                </Mails>
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