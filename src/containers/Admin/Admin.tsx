import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import firebase, { auth, isMe, db } from '../../firebase'
import '../../index.css';
import './Admin.css'
import formatDate from '../../util';
import {AdminBlogCard} from '../../components/AdminBlogCard/AdminBlogCard'

interface AdminBlogItem {
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
                const item: any = {
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

    const handleEdit = () => {

    };

    const blogItems = posts.map((post) => {
        const p = {
            ...post
        }

        return (
            <div className="post">
                <AdminBlogCard title={p.title} desc={p.desc} date={formatDate(p.date)} image={p.image} item={p} click={handleEdit} />
            </div>
        )
    });
    return (
        <>
            <article className="admin">
                <header className="title"><h1>Hey {admin.displayName?.split(' ').reverse()[0]}</h1></header>
                <section>
                    <header><h2>Adj hozzá postot</h2></header>
                    <div className="posts">
                        {blogItems}
                    </div>
                </section>
            </article>
        </>
    );
}