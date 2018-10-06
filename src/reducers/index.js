import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import ytVideosReducer from "../playlistBuilder/reducers/ytVideoReducer";
import playlistReducer from "../playlistBuilder/reducers/playlistReducer";
import searchTermReducer from "../playlistBuilder/reducers/searchTermReducer";
import paginationReducer from "../playlistBuilder/reducers/paginationReducer";

const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  videoResults: ytVideosReducer,
  nextPageToken: paginationReducer,
  playlist: playlistReducer,
  form: formReducer,
});

export default rootReducer;
