import * as meetup from '../actions/meetup';
import { tassign } from 'tassign';
import * as _ from 'lodash';
import { MeetupConstants } from "../../constans/meetup";


export interface Photo {
    id: number;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

export interface Organizer {
    id: number;
    name: string;
    bio: string;
    photo: Photo;
}

export interface GroupPhoto {
    id: number;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

export interface KeyPhoto {
    id: number;
    highres_link: string;
    photo_link: string;
    thumb_link: string;
    type: string;
    base_url: string;
}

export interface Category {
    id: number;
    name: string;
    shortname: string;
    sort_name: string;
}

export interface MeetupGroup {
    score: number;
    id: number;
    name: string;
    link: string;
    urlname: string;
    description: string;
    created: number;
    city: string;
    country: string;
    localized_country_name: string;
    state: string;
    join_mode: string;
    visibility: string;
    lat: number;
    lon: number;
    members: number;
    organizer: Organizer;
    who: string;
    group_photo: GroupPhoto;
    key_photo: KeyPhoto;
    timezone: string;
    category: Category;
}

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface Venue {
    country: string;
    localized_country_name: string;
    city: string;
    address_1: string;
    name: string;
    lon: number;
    id: number;
    lat: number;
    repinned: boolean;
}

export interface Group {
    join_mode: string;
    created: number;
    name: string;
    group_lon: number;
    id: number;
    urlname: string;
    group_lat: number;
    who: string;
}

export interface Meetup {
    utc_offset: number;
    venue: Venue;
    rsvp_limit: number;
    headcount: number;
    distance: number;
    visibility: string;
    waitlist_count: number;
    created: number;
    maybe_rsvp_count: number;
    description: string;
    event_url: string;
    yes_rsvp_count: number;
    name: string;
    id: string;
    time: number;
    updated: number;
    group: Group;
    status: string;
}

export interface State {
    coordinates: Coordinates,
    selectedTopics: string[],
    searchTerm: string,
    meetups: Meetup[],
    groups: MeetupGroup[],
    viewGroupOrMeetupSelected: string
}

const initialState: State = {
    coordinates: { latitude: -34.9058796, longitude: -56.140805699999994 },
    selectedTopics: [],
    meetups: [],
    groups: [],
    viewGroupOrMeetupSelected: MeetupConstants.MEETUP_EVENTS,
    searchTerm: ''
};

export function reducer(state = initialState, action: meetup.Actions): State {
    switch (action.type) {

        case meetup.ActionTypes.LOAD_INIT_GEOLOCATION_COMPLETE:
            return tassign(state, {
                coordinates: {
                    latitude: action.payload.coords.latitude,
                    longitude: action.payload.coords.longitude
                }
            });

        case meetup.ActionTypes.LOAD_INIT_MEETUPS_COMPLETE:
            return tassign(state, { meetups: action.payload });

        case meetup.ActionTypes.UPDATE_SHOW_VIEW:
            return tassign(state, { viewGroupOrMeetupSelected: action.payload });

        case meetup.ActionTypes.LOAD_INIT_GROUPS_COMPLETE:
            return tassign(state, { groups: action.payload });

        case meetup.ActionTypes.UPDATE_SEARCH_TERM:
            return tassign(state, { searchTerm: action.payload });

        case meetup.ActionTypes.UPDATE_FILTER_TOPIC:
            return tassign(state, { selectedTopics: action.payload });

        case meetup.ActionTypes.REMOVE_FILTER_TOPIC:
            return tassign(state, { selectedTopics: state.selectedTopics.filter( topic => topic !== action.payload ) });

        default:
            return state;
    }
}
