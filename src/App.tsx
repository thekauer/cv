import './App.css';
import './index.css';
import Toolbar from './components/Toolbar/Toolbar'
import Footer from './components/Footer/Footer'
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home'
import Resume from './containers/Resume/Resume';
import Contacts from './containers/Contact/Contacts';
import Blog from './containers/Blog/Blog'
import BlogArticle from './containers/BlogArticle/BlogArticle';
import { Fusion } from './containers/Fusion/Fusion';
import { Phd } from './containers/Phd/Phd';
import "firebase/auth";

function App() {
  return (
    <>
    <div className="main">
      <div className="content">
        <Toolbar/>
        <div className="main-text">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contact" component={Contacts}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/blog/article/:articleId" component={BlogArticle}/>
            <Route exact path="/fusion" component={Fusion}/>
            <Route exact path="/phd" component={Phd}/>
          </Switch>
        </div>
        </div>
    </div>
    <Footer/>
      </>
  );
}

export default App;
