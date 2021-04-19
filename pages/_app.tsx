import '../styles/index.css'
import Head from 'next/head';
import { AlertTemplate } from '@components/AlertProvider';
import Layout from '../components/Layout';
import { positions,Provider as AlertProvider } from 'react-alert';
import type { AppProps } from 'next/app';
import useScrollToTop from '@hooks/useScrollToTop'
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
    return (
        <>
        <Head>
            <title>Kauer András</title>
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