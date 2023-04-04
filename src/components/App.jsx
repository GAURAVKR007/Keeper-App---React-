import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [items,setItems] = React.useState([]);
  const [newItem, setNewItem] = React.useState({
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target

    setNewItem((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    })
  }

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, newItem]);
    setNewItem({
      title: "",
      content: ""
    });
  }

  const removeItem = (id) => {
    setItems((prev)=>{
      return prev.filter((item,index)=>{
        return index!== id;
      })
    })
  }


  return (
    <div>
      <Heading />
      <CreateArea addItem={addItem} newItem={newItem} handleChange={handleChange}/>

      {
        items.map((item, index) => (
          <Note key={index} idx={index} title={item.title} remove={removeItem} content={item.content} />
        ))
      }

      {/* <Note key={1} 
      title="Note title" 
      content="Note content" 
      
      /> */}
      <Footer />
    </div>
  );
}

export default App;
