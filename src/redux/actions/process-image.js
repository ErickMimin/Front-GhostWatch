import {PROCESS_IMAGE_START, FORM_IMAGE_START} from '../../consts/action-types';

export const processImage = payload =>({
    type: PROCESS_IMAGE_START,
    payload
});

export const formImage = payload =>({
    type: FORM_IMAGE_START,
    payload
});