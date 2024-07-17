import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Set Title Here" aboutText="About TextUtils" homeTab="Visit Home" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm heading="Enter the text to convert" mode={mode}/> 
    {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
