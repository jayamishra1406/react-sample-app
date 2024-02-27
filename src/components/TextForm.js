import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import _ from 'lodash';

export default function TextForm(props) {
    const [text,setText]=useState("enter text here");
    const handleUpclick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleLowclick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleClearclick=()=>{
       
        setText("")
    }
    
const handleExtraSpaces = ()=>{
   let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    }
    const handleUpFirstclick=()=>{
        const updatedText=text.split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
         setText(updatedText)
     }
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

  return (
    <div>
        <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="light"?"white":props.color,color:props.mode==="light"?"black":"white"}} onChange={handleOnchange} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" color={props.color} onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearclick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpFirstclick}>Convert to Upperfirst</button>




        </div>
        <div className="container my-2" style={{color:props.mode==="light"?"black":"white"}} >
            <h2>Your Text Summary</h2>
            <p>{(text)?text.split(' ').filter((element)=>{return element.length!==0}).length:0} words,{text?text.length:0} character</p>
            <p>You will read the provided text in {text?0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length:0} minutes</p>
        </div>
        <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
            <h3>Preview your text here</h3>
            <p>{text.length>0?text:"Nothing to preview!!"}</p>
        </div>
      
    </div>
  )
}

TextForm.prototype={heading:PropTypes.string};