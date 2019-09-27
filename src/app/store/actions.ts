import { Action } from "@ngrx/store";

export const FETCH_RESULTS = "FETCH_RESULTS"

export class FetchResults implements Action {
    readonly type = FETCH_RESULTS
    
    constructor(public payload: any){}
    
}

export type FetchResultsActions = FetchResults