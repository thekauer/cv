import { AdminBlogItem } from "@pages/admin";
import { db } from "@utils/firebase";
import { useEffect, useState } from "react";

export const useFetchPost = (id : string) => {
    const postsRef = db.collection('blog');
    const [post,setPost] = useState<AdminBlogItem>();
    useEffect(()=>{
        postsRef.get().then((snapshot)=>{
            snapshot.forEach((doc) => {
                const data = doc.data()
                const item: AdminBlogItem|any = {
                    ...data,
                    date:data.date.toDate(),
                    id: doc.id,
                    highlighted:false
                }
            if(item.id==id) {
                setPost(item);
            }
            });
        });
    },[])
    return post;;
  } 