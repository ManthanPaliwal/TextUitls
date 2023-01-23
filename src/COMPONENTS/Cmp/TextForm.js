import React, { useState } from "react";

export default function TextForm(props) {
  // --------handle button events -----------
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const [text, setText] = useState(0);

  return (
    <div style={{color : props.mode === 'dark' ? 'white' : 'black'}} className="container">
      <div>
        <div>
          <h1 className="mb-3" style={{textAlign: "center"}}>WORD COUNTER APPLICATION </h1>
          <textarea 
            className="form-control"
            style={{border :"2px solid ",background : props.mode === 'dark' ? 'gray' : 'white', color : props.mode === 'dark' ? 'white' : 'black' }}
            value={text}
            onChange={handleOnChange}
            placeholder="enter text here to change"
            id="mybox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert Upper-Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLClick}>
          Convert Lower-Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger col-4 btn-lg mx-5" onClick={handleClClick}>
          Clear Text
        </button>
      </div>

      <div className="container my-2">
        <div>   
          <h2>Your Text Summary</h2>
          <b>
            <p>
              {text.toString().split(" ").length} WORD , {text.length} CHARACTER
            </p>
          </b>
          <p>{0.008 * text.toString().split(" ").length} minutes to read</p>
        </div>
        <h2>Preview</h2>
        <p>{ text.length>0 ? text : "enter something in the text box above to preview it here" }</p>
      </div>
    </div>
  );
}
