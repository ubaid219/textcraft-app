import React, { useState } from "react";

const TextArea = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleUpper = () => {
    const upper = text.toUpperCase();
    setText(upper);
    props.showAlert('Text Converted to Uppercase','success')
  };
  const handleLower = () => {
    const lower = text.toLowerCase();
    setText(lower);
    props.showAlert('Text Converted to LowerCase','success')
  };
  const handleClear = () => {
    setText("");
  };
  const handleCopy = () => {
    const copyItem = text;
    navigator.clipboard.writeText(copyItem);
    props.showAlert('Text Copied to Clipboard','success')
  };
  const handleExtraSpaces = () => {
    const newText = text.trim();
    const spaces = newText.replace(/\s+/g, " ");
    setText(spaces);
    props.showAlert('Extra spaces removed','success')
  };
  const handleEmails = () => {
    const emailRegex = /\b[\w._%+-]+@[\w.-]+\.\w{2,}\b/g;
    const emails = text.match(emailRegex);
    if (!emails) {
      setText("no emails found");
    } else {
      const emailsString = emails.join("\n");
      setText(emailsString);
    }
  };

  return (
    <>
      <div className="container " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <div className="mb-3">
          <h3 className="mt-4">Enter Your Text Below...</h3>
          <textarea
            onChange={handleChange}
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter text here..."
          ></textarea>
        </div>
        <button disabled={text.length===0}
          onClick={handleUpper}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          UpperCase
        </button>
        <button disabled={text.length===0}
          onClick={handleLower}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          LowerCase
        </button>
        <button disabled={text.length===0}
          onClick={handleClear}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          Clear
        </button>
        <button disabled={text.length===0}
          onClick={handleExtraSpaces}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          Remove Spaces
        </button>
        <button disabled={text.length===0}
          onClick={handleEmails}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          Find Email
        </button>
        <button disabled={text.length===0}
          onClick={handleCopy}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          Copy
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          {"  "}
          words {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}
          {"  "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text in the box above to preview here..."}</p>
      </div>
    </>
  );
};

export default TextArea;
