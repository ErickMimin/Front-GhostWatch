import {get} from 'lodash';

export const isImageProcess = state => get(state, 'process.isLoading');
export const imageProcessResult = state => get(state, 'process.imageResults.data.url');

export const formProcessResult = state => get(state, 'form.formResults.data');