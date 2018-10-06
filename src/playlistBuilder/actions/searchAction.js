import axios from "axios/index";
export const YT_SEARCH_VIDEOS = 'YT_SEARCH_VIDEOS';
export const YT_ADD_TO_PLAYLIST = 'YT_PLAYLIST_ADD';
export const YT_REMOVE_FROM_RESULTS = 'YT_REMOVE';
const API_KEY = '[API_KEY]';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export function searchVideos(searchParam, nextPageKey) {

    const params = {
        part: 'snippet',
        key: API_KEY,
        q: searchParam,
        type: 'video'
    };

    if(nextPageKey){
        params['pageToken'] = nextPageKey;
    }

    const request = axios.get(ROOT_URL, { params: params })
        .catch(function(error) {
            console.error(error);
        });

    return {
        type : YT_SEARCH_VIDEOS,
        payload : request
    }
}


export function removeFromResults(item){
    return {
        type: YT_REMOVE_FROM_RESULTS,
        payload: item
    }
}

export function addToPlaylist(item){
    return {
        type: YT_ADD_TO_PLAYLIST,
        payload: item
    }
}