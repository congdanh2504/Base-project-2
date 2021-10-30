import './App.css';

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
import Profile from './Container/ProfileContainer'
import PrivateRoute from './Components/PrivateRoute';
import UpdateRoute from './Components/UpdateRoute';

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
          <PrivateRoute path="/postBlog" component={PostBlog}/>
          <Route path="/List" component={ListContainer}/>
          <Route path="/Admin" component={AdminContainer}/>
          <Route path="/post/:id" component={PostDetail}/>
          <UpdateRoute path="/Post" exact component={Post}/>
          <Route path="/blog/:id" component={BlogDetail}/>
          <PrivateRoute path="/profile" component={Profile}/>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
