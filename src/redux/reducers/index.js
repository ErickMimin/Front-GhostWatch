import {combineReducers} from 'redux';
import process from './process-image';
import form from './form-image';


const rootReducer = combineReducers({
    process,
    form
});

export default rootReducer;