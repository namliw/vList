//reducers are always functions
import {YT_SET_TERM} from '../actions/setTermAction';

export default function (state = "", action) {

    switch (action.type) {
        case YT_SET_TERM:
            return action.payload;
            break;
    }

    return state;
}