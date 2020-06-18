import {put, call, takeLatest} from 'redux-saga/effects';
import {FORM_IMAGE_START, FORM_IMAGE_ERROR, FORM_IMAGE_COMPLETE} from '../../consts/action-types';
import { apiCall } from '../api';

export function* formImage({payload}){
    try{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        const results = yield call(apiCall, `/form-image`, payload, myHeaders, 'POST');
        yield put({type: FORM_IMAGE_COMPLETE, results});
    }catch (error){
        yield put({type: FORM_IMAGE_ERROR, error});
    }
}

export default function* form(){
    yield takeLatest(FORM_IMAGE_START, formImage);
}