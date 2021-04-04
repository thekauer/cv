import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const content = document.getElementsByClassName('content')[0];
      content.scroll(0,0);
    }, [pathname]);
  
    return null;
  }