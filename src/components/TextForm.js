import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to uppercase!', 'success')

    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase!', 'success')

    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = ""
        setText(newText)
        props.showAlert('clearing.......!', 'success')

    }

    const handleOnchange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{backgroundColor: props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}>
                <h2 className='my-4'>{props.heading}</h2>
                <div className="mb-3">
                    {/* <label htmlfor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'light'?'white':'gray',color:props.mode === 'light'?'black':'white',cursor:'pointer'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className='container my-3' style={{backgroundColor: props.mode === 'light'?'white':'#042743',color:props.mode === 'light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0 }).length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
