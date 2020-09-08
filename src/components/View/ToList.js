import React from 'react';
import updateView from '../store/view/action';
import { connect } from 'react-redux';

const ToList = ({ updateView }) => {
    return (
        <span onClick={() => updateView('list')} className="float-left mr-3 btn btn-info" role="button" title="Inicio">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill">
                <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                <path d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
            </svg>
        </span>
    )
}

export default connect(null, { updateView })(ToList);
