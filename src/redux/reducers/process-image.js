import {PROCESS_IMAGE_START, PROCESS_IMAGE_ERROR, PROCESS_IMAGE_COMPLETE} from '../../consts/action-types';


const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case PROCESS_IMAGE_START:
            return{...state, isLoading: true};
        case PROCESS_IMAGE_ERROR:
            return{...state, isLoading: false, error: action.error};
        case PROCESS_IMAGE_COMPLETE:
            return{...state, isLoading: false, imageResults: action.results};
        default:
            return{...state};
    }
}