import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatedNotesList from "../CreatedNotesList/CreatedNotesList";
import ArchivedNotesList from "../ArchivedNotesList/ArchivedNotesList";
import { Tabs, Tab } from "react-bootstrap";

const NotesList = () => {
    return (
        <div className="form-row">
            <div className="col-md-12 mb-3 note-card">
                <Tabs defaultActiveKey="created" id="tab-notes" unmountOnExit={true}>
                    <Tab eventKey="created" title="Notas">
                        <CreatedNotesList></CreatedNotesList>
                    </Tab>
                    <Tab eventKey="arvhived" title="Archivadas">
                        <ArchivedNotesList></ArchivedNotesList>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default NotesList;