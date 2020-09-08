const initialState = {noteId: ""};

export default(state = initialState, action) => {
    if(action.type === 'UPDATE_ID') {
        return { 
            ... state,
            noteId: action.payload
        }
    }
    return state;
}

export const selectNoteId = state => state.noteIdReducer.noteId; 