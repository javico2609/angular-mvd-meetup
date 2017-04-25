import { Meetup, MeetupGroup } from '../reducers/meetup';
import * as fromRoot from './../reducers';
import { createSelector } from 'reselect';
import * as _ from 'lodash';

export const getMeetups = (state: fromRoot.State) => state.meetup.meetups;
export const getGroups = (state: fromRoot.State) => state.meetup.groups;
export const getSearchTerm = (state: fromRoot.State) => state.meetup.searchTerm;

export const getMeetupsBySearchTerm = createSelector(getMeetups, getSearchTerm, (meetups: Meetup[], searchTerm) => {
    if (searchTerm === '')
        return meetups;

    return _.filter(meetups, (meetup: Meetup) => meetup.name.includes(searchTerm));
});

export const getGroupBySearchTerm = createSelector(getGroups, getSearchTerm, (groups: MeetupGroup[], searchTerm) => {
    if (searchTerm === '')
        return groups;

    return _.filter(groups, (group: MeetupGroup) => group.description.search(searchTerm) !== -1);
});