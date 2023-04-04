import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {

  const [isExpaned, setIsExpaned] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsExpaned(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={()=>{
            setIsExpaned(true);
          }}
        />
          {
            isExpaned && (<textarea
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows="3"
            />)
          }
        

        <Zoom in={isExpaned? true : false}> 
        <button onClick={submitNote}>
          <AddIcon />
        </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
