export const YT_SET_TERM = 'SET_TERM';

export function setTerm(searchParam) {

    return {
        type : YT_SET_TERM,
        payload : searchParam
    }
}