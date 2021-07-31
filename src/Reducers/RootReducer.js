import { combineReducers } from 'redux';
import { IndexReducer, EntryContentReducer, CreateEntryReducer } from './IndexReducer';

const RootReducer = combineReducers({
    Index: IndexReducer,
    entry: EntryContentReducer,
    newEntry: CreateEntryReducer
});

export default RootReducer;