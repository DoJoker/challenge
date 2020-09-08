import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateNote from "../CreateNote/CreateNote";
import NoteDetail from "../NoteDetail/NoteDetail";
import NotesList from "../NotesList/NotesList";
import ToAdd from "../View/ToAdd"
import { selectActiveView } from '../store/view/reducer';
import { connect } from 'react-redux';
import { selectNoteId } from "../store/noteId/reducer";
import ToList from "../View/ToList";
import StoreTxt from "../StoreTxt/StoreTxt";

const Main = ({ activeView, noteId }) => {
    return (
        <div className="form-row">
            <div className="col-md-6 offset-md-3 mb-3 note-card">
                <div className="form-row head-note">
                    <div className="col-md-12">
                        <ToList />
                        <span className="text-light">Servicio de notas</span>
                        <ToAdd />
                        <StoreTxt/>
                    </div>
                </div>
                <div className="col-md-12 mgtp-10">
                {
                    activeView === 'add' && <CreateNote />
                }
                {
                    activeView === 'list' && <NotesList />
                }
                {
                    activeView === 'detail' && <NoteDetail noteId={noteId} />
                }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        activeView: selectActiveView(state),
        noteId: selectNoteId(state)
    }
}

export default connect(mapStateToProps)(Main);