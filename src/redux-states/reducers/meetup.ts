import * as meetup from '../actions/meetup';
import { tassign } from 'tassign';
import * as _ from 'lodash';
import { MeetupConstants } from "../../constans/meetup";
import { Comments, Coordinates, Host, Meetup, MeetupGroup } from './models';

export interface State {
    coordinates: Coordinates,
    selectedTopics: string[],
    searchTerm: string,
    meetups: Meetup[],
    groups: MeetupGroup[],
    hosts: Host[],
    comments: Comments[],
    viewGroupOrMeetupSelected: string,
    selectedGroup: MeetupGroup,
    selectedMember: Host
}

const initialState: State = {
    coordinates: { latitude: -34.9058796, longitude: -56.140805699999994 },
    selectedTopics: [],
    meetups: [],
    groups: [],
    hosts: [],
    comments: [],
    viewGroupOrMeetupSelected: MeetupConstants.MEETUP_EVENTS,
    searchTerm: '',
    selectedGroup: null,
    selectedMember: null
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
            return tassign(state, { selectedTopics: state.selectedTopics.filter(topic => topic !== action.payload) });

        case meetup.ActionTypes.LOAD_INIT_HOSTS_COMPLETE:
            return tassign(state, { hosts: action.payload });

        case meetup.ActionTypes.LOAD_INIT_COMMENTS_COMPLETE:
            return tassign(state, { comments: action.payload });

        case meetup.ActionTypes.SELECT_MEETUP_GROUP:
            return tassign(state, { selectedGroup: action.payload });

        case meetup.ActionTypes.LOAD_MEMBERS_GROUP_COMPLETE:
            return tassign(state, { selectedGroup: tassign(state.selectedGroup, { hosts: action.payload }) });

        case meetup.ActionTypes.LOAD_MEMBER_DETAILS_COMPLETE: {
            let social: { provider: string, profile: string }[] = [];

            for (var key in action.payload.other_services) {
                if (action.payload.other_services.hasOwnProperty(key)) {
                    let socialInfo = {
                        provider: key,
                        profile: action.payload.other_services[key].identifier
                    }

                    social.push(socialInfo);
                }
            }

            return tassign(state, { selectedMember: tassign(action.payload, { social: social }) })
        }

        default:
            return state;
    }
}
