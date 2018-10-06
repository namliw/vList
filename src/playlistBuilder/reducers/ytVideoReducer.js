//reducers are always functions
import {YT_SEARCH_VIDEOS, YT_REMOVE_FROM_RESULTS} from '../actions/searchAction';
import _ from 'lodash';

export default function (state = [], action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case YT_SEARCH_VIDEOS:
            const {items} = action.payload.data;
            return [...state, ...items];
            break;
        case YT_REMOVE_FROM_RESULTS:
            return _.without(state, action.payload.data);
            break;
    }

    return state;
}