import {all} from 'redux-saga/effects';
import process from './process-image';
import form from './form-image'

export default function* rootSaga(){
    yield all([
        process(),
        form()
    ]);
}