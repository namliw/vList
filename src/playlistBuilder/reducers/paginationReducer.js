//reducers are always functions
import {YT_SEARCH_VIDEOS} from '../actions/searchAction';

export default function (state = [], action) {
    switch (action.type) {
        case YT_SEARCH_VIDEOS:
            return action.payload.data.nextPageToken;
            break;
    }

    return state;
}