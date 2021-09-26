import './App.css';
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import MostRent from './Components/MostRent'
import Blog from "./Components/Blog"
import Login from "./Components/Login"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Search,MostRent,Blog,Navbar} />
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
      {/* <Search/>
      <MostRent/>
      <Blog/> */}
    </div>
  );
}

export default App;
