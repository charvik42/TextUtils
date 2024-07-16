import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        /*console.log("Uppercase was clicked " + text);*/
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        /*console.log("Lowercase was clicked " + text);*/
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
    }
    const handleFirst = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>        
            <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-success mx-1" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-success mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-success mx-1" onClick={handleFirst}>Convert first letter to capital</button>

            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>

  )
}

