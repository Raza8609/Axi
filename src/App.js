import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import React, { useState } from 'react';
import Hero from './Component/Hero';
import Alert from './Component/Alert';
// import Textform from './Component/Textform';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"




function App() {

  const [mode, setMode] = useState('Light');

  const [alert, setAlert] = useState('');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }



  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('Light');
      showAlert("Enable Light Mode", "success")
      document.body.style.backgroundColor = "white";


    }
    else {
      setMode('dark');
      showAlert("Enable Dark Mode", "success")
      document.body.style.backgroundColor = "black";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div>
        <Alert alert={alert} />
      </div>
      
        {/* <Switch>
          <Route path="/Hero">
             <Hero />
          </Route>
          <Route path="/">
          <Textform />
          </Route>
        </Switch>
      </Router> */}
    </>



  );
}

export default App;
