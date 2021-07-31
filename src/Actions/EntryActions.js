import { ActionTypes } from '../Constants/Action.type';
export const setEntries = (entries) => {
    return {
        type: ActionTypes.SET_ENTRIES,
        payload: entries,
    }
}

export const selectedEntry = (entry) => {
    return {
        type: ActionTypes.SELECTED_ENTRY,
        payload: entry
    }
}

export const createEntry = (newEntry) => {
    return {
        type: ActionTypes.CREATE_ENTRY,
        payload: newEntry
    }
}


