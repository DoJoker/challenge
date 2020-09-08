import React from 'react';
import {selectActiveView } from '../store/view/reducer';
import { connect } from 'react-redux';

const ActiveView = ({activeView}) => activeView;

const mapStateToProps = state =>{
    return {
        activeView: selectActiveView(state)
    }
}

export default connect(mapStateToProps)(ActiveView);