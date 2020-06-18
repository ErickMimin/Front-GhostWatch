import {put, call, takeLatest} from 'redux-saga/effects';
import {PROCESS_IMAGE_START, PROCESS_IMAGE_ERROR, PROCESS_IMAGE_COMPLETE} from '../../consts/action-types';
import { apiCall } from '../api';

export function* processImage({payload}){
    try{
        const data = new FormData();
        data.append("image", payload?.files[0]);   
        data.append("height", payload.crop?.height);
        data.append("width", payload.crop?.width);
        data.append("x", payload.crop?.x);
        data.append("y", payload.crop?.y);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "multipart/form-data");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        const results = yield call(apiCall, `/process-image`, data, myHeaders, 'POST');
        yield put({type: PROCESS_IMAGE_COMPLETE, results});
    }catch (error){
        yield put({type: PROCESS_IMAGE_ERROR, error});
    }
}

export default function* process(){
    yield takeLatest(PROCESS_IMAGE_START, processImage);
}