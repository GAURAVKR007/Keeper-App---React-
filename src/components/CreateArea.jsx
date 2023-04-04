import React from "react";

function CreateArea({addItem,handleChange,newItem}) {

  return (
    <div>
      <form onSubmit={addItem}>
        <input name="title" placeholder="Title"
        value={newItem.title}
        onChange={handleChange} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} 
        value={newItem.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
