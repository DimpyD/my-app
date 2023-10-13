
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)

  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const theme =()=>{
      setMode('dark')
      document.body.style.backgroundColor='#4B6F44'
  }
  const yellowTheme =()=>{
    setMode('light')
    document.body.style.backgroundColor='#FFC72C'
}
  const togglemode = ()=>{
    if(mode==='light')
    {
      setMode('dark')  
      document.body.style.backgroundColor='#042743'  
      showAlert('dark Mode Enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'  
      showAlert('light Mode Enabled','warning')
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} theme={theme} yellowTheme={yellowTheme} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
        {/* <Routes>   
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>} />
        </Routes> */}
        </div> 
      {/* </Router>  */}
    </>
  );
}

export default App;
