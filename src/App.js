import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "swaraj Nayak"

function App() {
  return (
    <>
        {/* <Navbar/> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" />
        <TextForm heading="Enter the text to analyze"/>

        
    </>
  );
}

export default App;
