import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Todos from './components/Todos'
import Navbar from './components/Navbar';
import Header from './components/Header';
import History from './components/History';
// import { Button } from '@material-ui/core';
import { Button } from '@material-ui/core';




function App() {
  return (<>
  <Header></Header>

<Navbar></Navbar>

  <div class="middle">

<h1 >Organize it all</h1> 
 Free up your mental space
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/todos">
      <Todos />
    </Route>
    <Route path="/history">
      <History />
    </Route>
    <br/>
    <br/>
  </div>
  </>
  );
}

export default App;
