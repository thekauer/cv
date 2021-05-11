import '../styles/index.css'
import 'katex/dist/katex.min.css'
import Head from 'next/head';
import { AlertTemplate } from '@components/AlertProvider';
import Layout from '../components/Layout';
import { positions,Provider as AlertProvider } from 'react-alert';
import type { AppProps } from 'next/app';
import useScrollToTop from '@hooks/useScrollToTop'
import {useTrack} from '@hooks/useTrack'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const App = ({Component,pageProps} : AppProps) => {
    const options = {
        position: positions.BOTTOM_CENTER,
        timeout: 2000,
        containerStyle: {
          zIndex: 100,
          marginBottom:40,
        }
      }
      useScrollToTop();
      const {pathname} = useRouter();
      useEffect(()=>{
        useTrack('visit');
      },[])
      useEffect(()=> {
        useTrack('page:'+pathname);
      },[pathname])
    return (
        <>
        <Head>
            <title>Kauer András</title>
            <meta name="author" content="Kauer András"></meta>
            <meta name="robots" content="index, follow"/>
            <meta name="keywords" content="Kauer András, Resmue, Cv, Portfolio, Webdev, Frontend, Fullstack,C++,cpp,Python,Machine learning, CNN,GAN,"></meta>
            <meta name="description" content="Kauer András vagyok. Szoftverfejlesztő. Üdvözöllek a portfoliómon."/>
            <meta name="og:description" content="Kauer András vagyok. Szoftverfejlesztő. Üdvözöllek a portfoliómon."/>
            <meta name="twitter:description" content="Kauer András vagyok. Szoftverfejlesztő. Üdvözöllek a portfoliómon."/>
            <meta name="og:title" content="Kauer András Resume"/>
            <meta name="twitter:title" content="Kauer András Resume"/>
            <meta name="og:url" content="kauerandras.me"/>
        </Head>
        <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
        </AlertProvider>
        </>
    );
}


export default App;