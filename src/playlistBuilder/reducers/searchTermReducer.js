//reducers are always functions
import {YT_SET_TERM} from '../actions/setTermAction';

export default function (state = "", action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case YT_SET_TERM:
            return action.payload;
            break;
    }

    return state;
}