//reducers are always functions
import {YT_ADD_TO_PLAYLIST} from '../actions/searchAction';

export default function (state = [], action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case YT_ADD_TO_PLAYLIST:
            const item = action.payload;
            return [...state, item];
    }

    return state;
}