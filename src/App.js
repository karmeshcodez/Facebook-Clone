import './App.css';
import Dashboard from './Dashboard'
import Login from './Login'
import RegistrationForm from './RegistrationForm'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import React, {useState,useEffect} from 'react'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  }
  async function isAuth(){
    try{
      const response = await fetch("http://localhost:4000/auth/is-verify", {
        method: "GET",
        headers: {token: localStorage.token}
      })
      const parseRes = await response.json()

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    }
    catch(err){
      console.log(err.message)
    }
  }
  useEffect(() =>{
    isAuth()
  }, [])
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login" render={props => !isAuthenticated ? (<Login {...props} setAuth = {setAuth}/>) : (<Redirect to='/dashboard'/>)} />
          <Route exact path="/dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth = {setAuth}/> : <Redirect to='/login' />} />
          <Route exact path="/register" render={props => !isAuthenticated ? <RegistrationForm {...props} setAuth = {setAuth}/> : <Redirect to='/login' />} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
