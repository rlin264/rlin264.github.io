import logo from './logo.svg';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home'
import Blog from './views/Blog';
import ProjectPage from './views/ProjectPage/ProjectPage';
import BlogPage from './views/BlogPage/BlogPage';
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/blog'component={Blog}/>
        <Route exact path='/project/:project' component={ProjectPage}/>
        <Route exact path='/blog/:blog' component={BlogPage}/>
        <Route path='/notfound' component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
