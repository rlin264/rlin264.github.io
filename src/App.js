import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './views/Home/Home'
import Blog from './views/Blog';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'component={Home}/>
        <Route exact path='/blog'component={Blog}/>
      </Switch>
    </div>
  );
}

export default App;
