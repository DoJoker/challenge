const initialState = {view: ""};

export default(state = initialState, action) => {
    if(action.type === 'UPDATE_VIEW') {
        return { 
            ... state,
            view: action.payload
        }
    }
    return state;
}

export const selectActiveView = state => state.viewReducer.view; 