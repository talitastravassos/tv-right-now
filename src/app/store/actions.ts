import { Action } from '@ngrx/store';

export const FETCH_SEARCH = 'FETCH_SEARCH';
export const FETCH_AIRING_TODAY = 'FETCH_AIRING_TODAY';
export const FETCH_MOST_POPULAR = 'FETCH_MOST_POPULAR';
export const FETCH_UP_COMING = 'FETCH_UP_COMING';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_SHOW_DETAILS = 'FETCH_SHOW_DETAILS';
export const FETCH_SHOW_CREDITS = 'FETCH_SHOW_CREDITS';
export const IS_LOADING = 'IS_LOADING';

export class FetchSearch implements Action {
    readonly type = FETCH_SEARCH;

    constructor(public payload: any) { }
}
export class FetchAiringToday implements Action {
    readonly type = FETCH_AIRING_TODAY;

    constructor(public payload: any) { }
}

export class FetchMostPopular implements Action {
    readonly type = FETCH_MOST_POPULAR;

    constructor(public payload: any) { }
}

export class FetchUpComing implements Action {
    readonly type = FETCH_UP_COMING;

    constructor(public payload: any) { }
}

export class FetchTopRated implements Action {
    readonly type = FETCH_TOP_RATED;

    constructor(public payload: any) { }
}

export class FetchShowDetails implements Action {
    readonly type = FETCH_SHOW_DETAILS;

    constructor(public payload: any) { }
}

export class FetchShowCredits implements Action {
    readonly type = FETCH_SHOW_CREDITS;

    constructor(public payload: any) { }
}

export class IsLoading implements Action {
    readonly type = IS_LOADING;

    constructor(public payload: any) { }
}

// tslint:disable-next-line: max-line-length
export type FetchActions = FetchSearch | FetchAiringToday | FetchMostPopular | FetchUpComing | FetchTopRated | FetchShowDetails | FetchShowCredits | IsLoading;
