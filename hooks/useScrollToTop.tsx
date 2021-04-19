
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function useScrollToTop() {
    const {pathname} = useRouter();
    useEffect(()=>{
        document.getElementById('main')?.scrollTo(0,0);
    },[pathname]);
}