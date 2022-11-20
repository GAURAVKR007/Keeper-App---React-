import { React } from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes";

function App() {
  return (
    <div className="App">
      <Heading />
      {/* <Note /> */}

      {notes.map((note) => {
        return <Note
          key={note.key}
          title={note.title}
          content={note.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;