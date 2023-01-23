import Navbar from "./COMPONENTS/LayOut/Navbar"
import TextForm from "./COMPONENTS/Cmp/TextForm"
// import About from "./COMPONENTS/LayOut/About"
import React, {useState} from "react";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route
// } from 'react-router-dom';


function App() {
  
  const toggle = () =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743' ;
      document.title = "TextUtils -  Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' ;
      document.title = "TextUtils -  Light Mode"
    }
  }
  const [ mode , setMode ] = useState('light');
  return (
      // <Router>
        <div className="App">
          <Navbar title="TextUtils" mode = {mode} toggle = {toggle} />
          <TextForm mode = {mode}/>
          {/* <Routes> */}
            {/* <Route exact path='/' element={ <TextForm mode = {mode}/> }></Route> */}
            {/* <Route exact path='/about' element={< About mode = {mode} />}></Route> */}
          {/* </Routes> */}
        </div>
      // </Router>
  );
}

export default App;
