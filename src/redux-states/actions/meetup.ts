import { Action } from '@ngrx/store';
import { type } from './../util';

export const ActionTypes = {
    LOAD_INIT_GEOLOCATION: type('[Meetup] Load Init Geolocation'),
    LOAD_INIT_GEOLOCATION_COMPLETE: type('[Meetup] Load Init Geolocation COMPLETE'),
    LOAD_INIT_GEOLOCATION_FAIL: type('[Meetup] Load Init Geolocation FAIL'),
};

export class LoadInitGeolocationAction implements Action {
    type = ActionTypes.LOAD_INIT_GEOLOCATION;
    constructor(public payload: any = {}) { }
}

export class LoadInitGeolocationCompleteAction implements Action {
    type = ActionTypes.LOAD_INIT_GEOLOCATION_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadInitGeolocationFailAction implements Action {
    type = ActionTypes.LOAD_INIT_GEOLOCATION_FAIL;

    constructor(public payload: any) { }
}

export type Actions =
    LoadInitGeolocationAction |
    LoadInitGeolocationCompleteAction |
    LoadInitGeolocationFailAction;
