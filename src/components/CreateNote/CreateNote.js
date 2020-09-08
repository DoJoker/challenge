import React, {useState} from "react";
import "./createNote.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import updateView from '../store/view/action';
import { connect } from 'react-redux';

//component to add new note
const CreateNote = ({updateView}) => {
  //var to title
  let [title,setTitle]  = useState("");
  //var to body
  let [body,setBody]  = useState("");
  
  const cleanForm = () =>{
    setTitle('');
    setBody('');  
  }

  //component to get data from form. 
  const sendForm = (ev) => {
    ev.preventDefault();
    //validate data form
    if(isValidForm(title, body)) {
      //store data
      const lineFeed = !localStorage.getItem('notes') ? "" : "\n";  
      const note = lineFeed + title + "|" + body.toUpperCase() + "|" + new Date().getTime() + "|created"; 
      const notes = localStorage.getItem('notes') + note;
      localStorage.setItem('notes',notes);
      updateView('list');
      cleanForm();
    }
  }

  //validate inputs form
  let isValidForm = (title, body)=> {
    const notMail = /.+@.+\..+/;
    const notPipe = /[\|]/;
    const notLine = /[/\n]/;
    if(title === '') {
      alert("El titulo no puede estar vacio.");
      return false;
    }
    if( notMail.test(title)){
      alert("El titulo no puede ser correo electrónico.");
      return false;
    }
    if(body === '') {
      alert("El cuerpo debe contener texto.")
      return false;
    }
    if(notPipe.test(body) || notLine.test(body)) {
      alert("No se permite ingresar el caracter: '|' o salto de linea");
      return false;
    } 
    return true;
  }

  // form to add new note
  return (
    <form onSubmit={ (ev) => sendForm(ev) } autoComplete="off">
      <div className="form-row">
        <div className="col-md-12 mb-3 note-card">
          <h3>Nota</h3>
          <div className="form-group mb-0">
            <input type="text" className="form-control" id="title" value={title} placeholder="Titulo" 
            onChange={ (ev) => setTitle(ev.target.value) }/>
          </div>
          <div className="form-group">
            <textarea className="form-control text-uppercase" id="body" value={body} rows="3" placeholder="Nota" 
            onChange={  (ev) => setBody(ev.target.value) }></textarea>
          </div>
          <input type="submit" className="btn btn-note" value="Guardar"/>
        </div>
      </div>
    </form>
  );
};

export default connect(null, {updateView})(CreateNote);