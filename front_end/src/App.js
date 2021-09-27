import './App.css';
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import MostRent from './Components/MostRent'
import Blog from "./Components/Blog"
import Login from "./Components/Login"
import Join from "./Components/Login/Join"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact >
            <Navbar/>
            <Search/>
            <MostRent/>
            <Blog/>
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/join" component={Join}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
