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

function App() {
  return (
    <>
    <Helmet>
      <title>Kauer András</title>
    </Helmet>
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
        </Switch>
      </Layout>
    </>
  );
}

export default App;
