//reducers are always functions
import {YT_SEARCH_VIDEOS, YT_REMOVE_FROM_RESULTS, YT_LOAD_MORE} from '../actions/searchAction';
import _ from 'lodash';

export default function (state = [], action) {
    console.log(action.type, action.payload);
    switch (action.type) {
        case YT_SEARCH_VIDEOS:
            return _.mapKeys(action.payload.data.items, 'etag');
        case YT_LOAD_MORE:
            const items = _.mapKeys(action.payload.data.items, 'etag');
            return {...state, ...items};
        case YT_REMOVE_FROM_RESULTS:
            const vids = _.omitBy(state, (video) => {
                return video.etag == action.payload.etag;
            });
            return vids;
    }

    return state;
}