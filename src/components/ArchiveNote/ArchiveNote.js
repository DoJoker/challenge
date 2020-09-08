import React from "react";

const ArchiveNote = (props) => {
    const fileNote = (id,e) => {
      //Get current notes
      const notes = localStorage.getItem('notes').split("\n");
      
      //Write notes without the note to delete.
      localStorage.setItem('notes', notes.map(note => {
        let auxNotes = note.split("|");
        if(auxNotes[2]==id){
          auxNotes[3] = 'archived';
          return auxNotes.join("|"); 
        }
        return note;
      }).join("\n"));

    }
    //Component with icon archive
    return (
      <span className="float-right mr-3" role="button" title="Archivar">
       <svg onClick={(e)=> fileNote(props.time, e)} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-archive-fill" fill="currentColor">
         <path  d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
       </svg>
      </span>
    )
  }

  export default ArchiveNote;