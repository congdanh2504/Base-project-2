import './App.css';
import Navbar from './Components/Navbar'
import Blog from "./Components/Blog"
import Login from "./Components/Login"
import Join from "./Components/Login/Join"
import Post from "./Components/Post"
import PostBlog from "./Components/PostBlog"
import BlogContainer from './Container/BlogContainer';
import ListContainer from './Container/ListContainer';
import AdminContainer from './Container/AdminContainer';
import MainContainer from './Container/MainContainer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact >
          <MainContainer />
            {/* <Navbar/>
            <Search/>
            <MostRent/>
            <Blog/> */}
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/join" component={Join}/>
          <Route path="/blog" component={BlogContainer}/>
          <Route path="/postBlog" component={PostBlog}/>
          <Route path="/List" component={ListContainer}/>
          <Route path="/Admin" component={AdminContainer}/>
          <Route path="/post">
            <Navbar />
            <Post />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
