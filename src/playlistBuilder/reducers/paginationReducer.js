//reducers are always functions
import {YT_SEARCH_VIDEOS, YT_LOAD_MORE} from '../actions/searchAction';

export default function (state = '', action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case YT_SEARCH_VIDEOS:
        case YT_LOAD_MORE:
            return action.payload.data.nextPageToken;
    }
    return state;
}