import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
 
  const handleOnChange= (event)=>{
      setText(event.target.value)
  }
  const handleUpClick = ()=>{
    if(text===''){
      props.showAlert("Enter some text.","danger")
    }
    else{
    setText(text.toUpperCase())
    props.showAlert("converted to upper case.","success")
    }
  }
  const handleLowClick = ()=>{
    setText(text.toLowerCase())
    props.showAlert("converted to lower case.","success")
  }
  const handleSClick = ()=>{
    setText(text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase()));
  }
  return (
    <>
   <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label mt-3" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</label>
          <textarea className="form-control" style={{background: props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleSClick}>Convert to sentencecase</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
      <h3>Your Text summary</h3>
      <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
      <p>{0.008 * text.split(" ").length} Mintues read</p>
      <h3>Preview</h3>
      <p>{text.length===0?'Enter something to preview here':text}</p>
    </div>
    </>
  )
}

