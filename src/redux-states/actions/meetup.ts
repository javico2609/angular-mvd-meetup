import { Action } from '@ngrx/store';
import { type } from './../util';

export const ActionTypes = {
    LOAD_INIT_GEOLOCATION: type('[Meetup] Load Init Geolocation'),
    LOAD_INIT_GEOLOCATION_COMPLETE: type('[Meetup] Load Init Geolocation COMPLETE'),
    LOAD_INIT_GEOLOCATION_FAIL: type('[Meetup] Load Init Geolocation FAIL'),

    LOAD_INIT_MEETUPS: type('[Meetup] Load Meetups'),
    LOAD_INIT_MEETUPS_COMPLETE: type('[Meetup] Load Meetups COMPLETE'),
    LOAD_INIT_MEETUPS_FAIL: type('[Meetup] Load Meetups FAIL'),
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

export class LoadMeetupsAction implements Action {
    type = ActionTypes.LOAD_INIT_MEETUPS;
    constructor(public payload: any = {}) { }
}

export class LoadMeetupsCompleteAction implements Action {
    type = ActionTypes.LOAD_INIT_MEETUPS_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadMeetupsFailAction implements Action {
    type = ActionTypes.LOAD_INIT_MEETUPS_FAIL;

    constructor(public payload: any) { }
}

export type Actions =
    LoadInitGeolocationAction |
    LoadInitGeolocationCompleteAction |
    LoadInitGeolocationFailAction |
    LoadMeetupsAction |
    LoadMeetupsCompleteAction |
    LoadMeetupsFailAction;
