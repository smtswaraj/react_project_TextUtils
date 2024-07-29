import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

// let name = "swaraj Nayak"

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500);
  }

  const toggleMode = () =>{
    if (mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing Mode'
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils now'
      // },1500);
    }   
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }


  return (
    <>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert} />
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert = {showAlert}/>
        {/* <About/> */}
        
    </>
  );
}

export default App;
