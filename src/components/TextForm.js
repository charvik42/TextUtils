import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [boldText, setBold] = useState({
        fontWeight: 'normal'
    });

    const handleUpClick = ()=>{
        /*console.log("Uppercase was clicked " + text);*/
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleDownClick = ()=>{
        /*console.log("Lowercase was clicked " + text);*/
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    const handleFirst = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("First word is capitalized", "success");
    }
    const handleBold = () =>{
        if (boldText.fontWeight == 'normal'){
            setBold(
                {
                    fontWeight: 'bold'
                }
            )
        }
        if (boldText.fontWeight == 'bold'){
            setBold(
                {
                    fontStyle: 'italic'
                }
            )
        }
    }


    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    return (
        <>        
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
           {/*<textarea className="form-control" value= {text} style={boldText} onChange = {handleOnChange} id="myBox" rows="8"></textarea>*/}
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-success mx-1" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-success mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-success mx-1" onClick={handleFirst}>Convert first letter to capital</button>
            {/*<button className="btn btn-success mx-1" onClick={handleBold}>Convert to bold/italics</button>*/}
            <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-1 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
            </div>
        </>

  )
}

