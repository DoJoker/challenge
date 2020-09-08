const updateId = id => {
    return {
        type: 'UPDATE_ID',
        payload: id
    }    
}

export default updateId;