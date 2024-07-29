import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = ""
        setText(newText)

    }

    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{backgroundColor: props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label htmlfor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white',cursor:'pointer'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-success mx-3" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-success " onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className='container my-3' style={{backgroundColor: props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
