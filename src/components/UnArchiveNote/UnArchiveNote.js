import React from "react";

const UnArchiveNote = (props) => {
    const unarchiveNote = (id,e) => {
      //Get current notes
      const notes = localStorage.getItem('notes').split("\n");
      
      //Write notes without the note to delete.
      localStorage.setItem('notes', notes.map(note => {
        let auxNotes = note.split("|");
        if(auxNotes[2]==id){
          auxNotes[3] = 'created';
          return auxNotes.join("|"); 
        }
        return note;
      }).join("\n"));

    }
    //Component with icon archive
    return (
      <span className="float-right mr-3" role="button" title="Desarchivar">
       <svg onClick={(e)=> unarchiveNote(props.time, e)} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-capslock-fill" fill="currentColor">
        <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z"/>
      </svg>
      </span>
    )
  }

  export default UnArchiveNote;