import './App.css';
import Navbar from './Components/Navbar'
import Blog from "./Components/Blog"
import Login from "./Components/Login"
import Join from "./Components/Login/Join"
import Post from "./Components/Post"
import PostBlog from "./Components/PostBlog"
import BlogContainer from './Container/BlogContainer';
import BlogDetail from './Container/BlogContainer/BlogDetail';
import ListContainer from './Container/ListContainer';
import AdminContainer from './Container/AdminContainer';
import MainContainer from './Container/MainContainer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getToken } from './api/Common';
import { getUserAuth } from './api/loginAPI';
import Loading from './Components/Loading';
import PostDetail from './Components/Post/PostDetail';
const item = {
  'title' : "nha pro vjp ehehehe hehehe heheh asdasdasdasd asdasdasdas 1",
  'image' : "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768",
  'people' : 2,
  'area' : 100,
  "address" : "asodj oiw ehj rew odsif asdasdas dasd asdsa dasd",
  "price" : 10000000,
  "description" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam eius blanditiis quae repudiandae, exercitationem et id odio fugit impedit animi nostrum beatae possimus consectetur, praesentium amet voluptates tempora! Blanditiis, magni!",
}
function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    if (!getToken) {
      return;
    } else {
      getUserAuth(setAuthLoading);
    }
  }, []);

  if (authLoading && getToken() != null) return <Loading/>;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact >
          <MainContainer />
          </Route>
          <Route path="/login" component={Login}/>
          <Route path="/join" component={Join}/>
          <Route path="/blog" exact component={BlogContainer}/>
          <Route path="/postBlog" component={PostBlog}/>
          <Route path="/List" component={ListContainer}/>
          <Route path="/Admin" component={AdminContainer}/>
          <Route path="/post" exact>
            <Navbar />
            <Post />
          </Route>
          <Route path="/post/test" >
          <PostDetail item={item}/>
          </Route>
          <Route path="/blog/test" >
          <BlogDetail />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
