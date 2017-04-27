import { Action } from '@ngrx/store';
import { type } from './../util';

export const ActionTypes = {
    LOAD_INIT_GEOLOCATION: type('[Meetup] Load Init Geolocation'),
    LOAD_INIT_GEOLOCATION_COMPLETE: type('[Meetup] Load Init Geolocation COMPLETE'),
    LOAD_INIT_GEOLOCATION_FAIL: type('[Meetup] Load Init Geolocation FAIL'),

    LOAD_INIT_MEETUPS: type('[Meetup] Load Meetups'),
    LOAD_INIT_MEETUPS_COMPLETE: type('[Meetup] Load Meetups COMPLETE'),
    LOAD_INIT_MEETUPS_FAIL: type('[Meetup] Load Meetups FAIL'),

    LOAD_INIT_GROUPS: type('[Meetup] Load Groups'),
    LOAD_INIT_GROUPS_COMPLETE: type('[Meetup] Load Groups COMPLETE'),
    LOAD_INIT_GROUPS_FAIL: type('[Meetup] Load Groups FAIL'),

    UPDATE_SHOW_VIEW: type('[VIEW] Update view selected on home page'),

    UPDATE_SEARCH_TERM: type('[VIEW] Update search term'),

    UPDATE_FILTER_TOPIC: type('[VIEW] Update filter topics'),
    REMOVE_FILTER_TOPIC: type('[VIEW] Remove filter topics'),

    LOAD_MEETUP_DETAILS: type('[Meetup] Load Meetup Details'),
    LOAD_MEETUP_DETAILS_FAIL: type('[Meetup] Load Meetup Details FAIL'),

    LOAD_INIT_HOSTS_COMPLETE: type('[Meetup] Load Hosts COMPLETE'),

    LOAD_INIT_COMMENTS_COMPLETE: type('[Meetup] Load Comments COMPLETE'),
    
};

export class UpdateFilterTopicAction implements Action {
    type = ActionTypes.UPDATE_FILTER_TOPIC;
    constructor(public payload: any = {}) { }
}

export class RemoveFilterTopicAction implements Action {
    type = ActionTypes.REMOVE_FILTER_TOPIC;
    constructor(public payload: any = {}) { }
}

export class UpdateSearchTermAction implements Action {
    type = ActionTypes.UPDATE_SEARCH_TERM;
    constructor(public payload: any = {}) { }
}

export class LoadGroupsAction implements Action {
    type = ActionTypes.LOAD_INIT_GROUPS;
    constructor(public payload: any = {}) { }
}

export class LoadGroupsCompleteAction implements Action {
    type = ActionTypes.LOAD_INIT_GROUPS_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadGroupsFailAction implements Action {
    type = ActionTypes.LOAD_INIT_GROUPS_FAIL;

    constructor(public payload: any) { }
}

export class UpdateSelectedViewAction implements Action {
    type = ActionTypes.UPDATE_SHOW_VIEW;
    constructor(public payload: any = {}) { }
}

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

export class LoadMeetupDetailsAction implements Action {
    type = ActionTypes.LOAD_MEETUP_DETAILS;
    constructor(public payload: any = {}) { }
}

export class LoadHostsCompleteAction implements Action {
    type = ActionTypes.LOAD_INIT_HOSTS_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadCommentsCompleteAction implements Action {
    type = ActionTypes.LOAD_INIT_COMMENTS_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadMeetupDetailsFailAction implements Action {
    type = ActionTypes.LOAD_MEETUP_DETAILS_FAIL;

    constructor(public payload: any) { }
}

export type Actions =
    LoadInitGeolocationAction |
    LoadInitGeolocationCompleteAction |
    LoadInitGeolocationFailAction |
    LoadMeetupsAction |
    LoadMeetupsCompleteAction |
    LoadMeetupsFailAction |
    UpdateSelectedViewAction |
    LoadGroupsAction |
    LoadGroupsCompleteAction |
    LoadGroupsFailAction |
    UpdateFilterTopicAction |
    LoadMeetupDetailsAction |
    LoadHostsCompleteAction |
    LoadCommentsCompleteAction |
    LoadMeetupDetailsFailAction;
