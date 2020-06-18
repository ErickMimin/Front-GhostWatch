import {FORM_IMAGE_START, FORM_IMAGE_ERROR, FORM_IMAGE_COMPLETE} from '../../consts/action-types';


const initialState = {};

export default function(state = initialState, action){
    switch(action.type){
        case FORM_IMAGE_START:
            return{...state};
        case FORM_IMAGE_ERROR:
            return{...state, error: action.error};
        case FORM_IMAGE_COMPLETE:
            return{...state, formResults: action.results};
        default:
            return{...state};
    }
}