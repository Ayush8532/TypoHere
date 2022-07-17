import React, { useState } from 'react'

export default function Textform(props) {
    const[text,setText]=useState('');
   
    const uppervalue=()=>{
        let vale=text.toUpperCase();
        setText(vale); 
        props.showAlert("Converted to Upper Case","success");
    }
    const lowervalue=()=>{
        let vale=text.toLowerCase();
        setText(vale);
        props.showAlert("Converted to Lower Case","success");  
    }
    const clearval=()=>{
        setText(''); 
        props.showAlert("Text Cleared","success");
    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }
    
    return (
        <>
        <div className='container my-4'>
            <div className="mb-3">
                <h1>{props.title}</h1>
                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} type="button" onClick={clearval} className="btn btn-info mx-2 my-2">Clear Text</button>
            <button disabled={text.length===0} type="button" onClick={uppervalue} className="btn btn-info mx-2 my-2">Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" onClick={lowervalue} className="btn btn-info mx-2 my-2">Convert to Lowercase</button>
            
        </div>
        <div className='container my-3'>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <hr />
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview here"}</p>
        </div>
        </>
    )
}
