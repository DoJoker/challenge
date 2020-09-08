const updateView = view => {
    return {
        type: 'UPDATE_VIEW',
        payload: view
    }    
}

export default updateView;