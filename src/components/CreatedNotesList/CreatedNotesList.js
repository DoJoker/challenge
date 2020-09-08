import React, { useState, useEffect } from "react";
import "./createdNotesList.scss";
import DeleteNote from "../DeleteNote/DeleteNote";
import ArchiveNote from "../ArchiveNote/ArchiveNote";
import updateView from '../store/view/action';
import updateId from '../store/noteId/action';
import { connect } from 'react-redux';

//Component that returns a list of notes.
const CreatedNotesList = ({updateView, updateId}) => {
  let [data, setData] = useState([]);

  //get notes data from localstoage, only one time.
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = ()=>{
     if (!!localStorage.getItem('notes')) {
      setData(localStorage.getItem('notes').split("\n"));
    }
  }
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
  const createdNotes = allNotes.filter(x => x.folder === 'created');

  //Assign each created note to a list item.
  const listItems = createdNotes.map((note, idx) => {
    return (
      <li className="list-group-item" key={idx}>
        <span className="" role="button" onClick={ () => {updateId(note.date); updateView('detail'); } }>{note.title} | {note.dateStr}</span>
        <span className="" onClick={ () => fetchData() }><DeleteNote time={note.date} /><ArchiveNote time={note.date} /></span>
      </li>
    )
  });


  //List component.
  return (<ul className="list-group notes-list">{listItems}</ul>);
}

export default connect(null, {updateView, updateId})(CreatedNotesList);