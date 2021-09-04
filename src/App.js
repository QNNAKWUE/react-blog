import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import AllPost from './Components/AllPost';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Redirect from='/CreatePost' to='/Register' />
          <Route exact path='/' component={Home}>
            <Home />
          </Route>

          <Route exact path='/Register' component={Register}>
            <Register /> 
          </Route>

          <Route exact path='/Login' component={Login}>
            <Login />
          </Route>

          <Route exact path='/CreatePost' component={CreatePost}>
            <CreatePost />
          </Route>

          <Route exact path='/AllPost' component={AllPost}>
            <AllPost />
          </Route>

          <Route component=
            {NotFound}>

          </Route>

          

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
