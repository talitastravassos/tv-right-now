import * as FetchResultsActions from "./actions";

const initialState = {
    searchShows: []
}

export function ShowsReducer(state = initialState, action: FetchResultsActions.FetchResultsActions){
    switch (action.type) {
        case FetchResultsActions.FETCH_RESULTS:
            return {
                ...state,
                searchShows: action.payload
            }
        default:
            return state
    }
}