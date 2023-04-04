import React from "react";

function Note({title,content,remove,idx}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => {remove(idx)}}>DELETE</button>
    </div>
  );
}

export default Note;