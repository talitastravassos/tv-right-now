import * as FetchActions from './actions';

const initialState = {
    isLoading: false,
    searchShows: [],
    airingToday: [],
    mostPopular: [],
    topRated: [],
    upComing: [],
    showDetails: {},
    showCredits: {}
};

export function ShowsReducer(state = initialState, action: FetchActions.FetchActions) {
    switch (action.type) {
        case FetchActions.IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case FetchActions.FETCH_SEARCH:
            return {
                ...state,
                searchShows: action.payload
            };
        case FetchActions.FETCH_AIRING_TODAY:
            return {
                ...state,
                airingToday: action.payload
            };
        case FetchActions.FETCH_MOST_POPULAR:
            return {
                ...state,
                mostPopular: action.payload
            };
        case FetchActions.FETCH_TOP_RATED:
            return {
                ...state,
                topRated: action.payload
            };
        case FetchActions.FETCH_UP_COMING:
            return {
                ...state,
                upComing: action.payload
            };
        case FetchActions.FETCH_SHOW_DETAILS:
            return {
                ...state,
                showDetails: action.payload
            };
        case FetchActions.FETCH_SHOW_CREDITS:
            return {
                ...state,
                showCredits: action.payload
            };
        default:
            return state;
    }

}
