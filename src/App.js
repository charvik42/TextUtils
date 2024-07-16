import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title="Set Title Here" aboutText="About TextUtils" homeTab="Visit Home" />
    <div className="container my-3">
    <TextForm heading="Enter the text to convert"/> 
    <About/>
    </div>
    </>
  );
}

export default App;
