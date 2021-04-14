import './index.css';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home'
import Resume from './containers/Resume/Resume';
import Contacts from './containers/Contact/Contacts';
import Blog from './containers/Blog/Blog'
import BlogArticle from './containers/BlogArticle/BlogArticle';
import { Fusion } from './containers/Fusion/Fusion';
import { Phd } from './containers/Phd/Phd';
import Layout from './Layout';
import { Helmet } from 'react-helmet';
import { AndroidApp } from './containers/AndroidApp/AndroidApp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Admin } from './containers/Admin/Admin';
import { AdminEdit } from './containers/AdminEdit/AdminEdit';
import { positions, Provider as AlertProvider } from 'react-alert'
import { AlertTemplate } from './components/AlertProvider/AlertProvider';

function App() {
  const backend = process.env.REACT_APP_BACKEND;
  const [loading,setLoading] = useState(true);
  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    containerStyle: {
      zIndex: 100,
      marginBottom:40,
    }
  }
  return (
    <>
    <Helmet>
      <title>Kauer András</title>
    </Helmet>
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/article/:articleId" component={BlogArticle} />
          <Route exact path="/fusion" component={Fusion} />
          <Route exact path="/phd" component={Phd} />
          <Route exact path="/androidapp" component={AndroidApp} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/edit/:articleId" component={AdminEdit}/>
        </Switch>
      </Layout>
    </AlertProvider>
    </>
  );
}

export default App;
