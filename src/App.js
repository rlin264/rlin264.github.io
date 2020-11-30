import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './views/Home/Home'
import Blog from './views/Blog';
import ProjectPage from './views/ProjectPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/blog'component={Blog}/>
        <Route exact path='/project/:project' component={ProjectPage}/>
      </Switch>
    </div>
  );
}

export default App;
