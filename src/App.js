import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { 
      setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
      {/*setInterval(() => {
        document.title = "TextUtils is amazing";
      }, 2000);
      
      setInterval(() => {
        document.title = "Install TextUtils";
      }, 1500);*/}
}
  }
  return (
    <>
    <Navbar title="Set Title Here" aboutText="About TextUtils" homeTab="Visit Home" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to convert" showAlert={showAlert} mode={mode}/> 
    {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
