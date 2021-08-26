import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from "react";
// import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  // function handleClick() {
  //   props.onDelete(props.id);
  // }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <SyntaxHighlighter language="python" style={a11yLight}>
        {props.content}
      </SyntaxHighlighter>
      
      {/* <button onClick={handleClick}>
        <DeleteIcon />
      </button> */}
    </div>
  );
}

export default Note;
