import React, { useState, useEffect } from "react";
import "./noteDetail.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

//component to add new note
const UpdateNote = (props) => {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  //get notes data from localstorage, only one time.
  useEffect(() => {
    getNotes(props.noteId);
  }, []);

  const getNotes = (id) => {
    if (!!localStorage.getItem('notes')) {
      let data = localStorage.getItem('notes').split("\n");
      //Parse each line string to an 'noteObj' Object. 
      //The line should be built in the following layout: 'TITLE|BODY|DATE|FOLDER' (the date is in mlseconds)
      const allNotes = data.map(note => {
        return {
          title: note.split("|")[0],
          body: note.split("|")[1],
          date: note.split("|")[2],
          dateStr: new Date(parseInt(note.split("|")[2])).toLocaleString(),
          folder: note.split("|")[3]
        }
      });

      //Filter only 'created' notes.
      const note = allNotes.filter(item => item.date === id);
      setTitle(note[0].title);
      setBody(note[0].body);
    }
  }

  // form to add new note
  return (
    <div className="form-row">
      <div className="col-md-12 mb-3 note-card">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default UpdateNote;