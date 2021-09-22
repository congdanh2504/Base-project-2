import './App.css';
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      <Search/>
    </div>
  );
}

export default App;
