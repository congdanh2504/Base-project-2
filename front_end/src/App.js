import './App.css';
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import MostRent from './Components/MostRent'
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
      <MostRent/>
    </div>
  );
}

export default App;
