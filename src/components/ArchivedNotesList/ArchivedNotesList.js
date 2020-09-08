import React, { useState, useEffect } from "react";
import "./archivedNotesList.scss";
import DeleteNote from "../DeleteNote/DeleteNote";
import UnArchiveNote from "../UnArchiveNote/UnArchiveNote";
import updateView from '../store/view/action';
import updateId from '../store/noteId/action';
import { connect } from 'react-redux';

//Component that returns a list of archived notes
const ArchivedNotesList = ({updateView, updateId}) => {
  const [data, setData] = useState([]);

   //get notes data from localstoage, only one time.
   useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
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

  //Filter only 'archived' notes
  const archivedNotes = allNotes.filter(item => item.folder === 'archived');

  //Assign each item to a list tag element
  const listItems = archivedNotes.map((note, idx) => {
    return (
      <li className="list-group-item" key={idx}>
        <span className="" role="button" onClick={ () => {updateId(note.date); updateView('detail'); } }>{note.title} | {note.dateStr}</span>
        <span className="" onClick={ () => fetchData() }><DeleteNote time={note.date} /><UnArchiveNote time={note.date} /></span>
      </li>
    )
  });

  //List component
  return (<ul className="list-group notes-list">{listItems}</ul>);

}

//Component to perform the call to .txt file and return the data inside it.
//Also split the text by each jump line
const useFetch = (url) => {
  let s = localStorage.getItem('notes');
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!!localStorage.getItem('notes')) {
      setData(localStorage.getItem('notes').split("\n"));
    }
  }, [url]);

  return data;
};


export default connect(null, {updateView, updateId})(ArchivedNotesList);