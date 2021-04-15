import { useEffect } from "react";
import Router from 'next/router'

export default function ScrollToTop() {
    useEffect(() => {
      const content = document.getElementById('main');
      content?.scroll(0,0);
    }, []);
  
    return null;
  }