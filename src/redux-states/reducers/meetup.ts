import * as meetup from '../actions/meetup';
import { tassign } from 'tassign';
import * as _ from 'lodash';

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

export interface Meetups {
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
    meetups: Meetups[]
}

const initialState: State = {
    coordinates: { latitude: -34.9058796, longitude: -56.140805699999994 },
    selectedTopics: [],
    meetups: []
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

        default:
            return state;
    }
}
