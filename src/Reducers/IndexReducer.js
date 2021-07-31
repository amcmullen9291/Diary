import { ActionTypes } from '../Constants/Action.type';
import concatenateReducers from 'redux-concatenate-reducers';

const initialState = {
    entries: [],
};

export const IndexReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ENTRIES:
            return { ...state, entries: payload};
        default:
            return state
    }
};

export const EntryContentReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_ENTRY:
            return { ...state, ...payload};
        default:
            return state;
    }
}

export const CreateEntryReducer = concatenateReducers([
(state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.CREATE_ENTRY:
            const entries = state.Index;
            const newEntry = payload;
            return { ...state, entries: entries + newEntry };
        default:
            return state;
    }
}
])