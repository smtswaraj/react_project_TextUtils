import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

// let name = "swaraj Nayak"

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = () =>{
    if (mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }   
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'

    }
  }


  return (
    <>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <TextForm heading="Enter the text to analyze" mode={mode}/>
        {/* <About/> */}
        
    </>
  );
}

export default App;
