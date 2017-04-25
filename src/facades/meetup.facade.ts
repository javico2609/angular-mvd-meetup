import { Meetup, MeetupGroup } from '../redux-states/reducers/meetup';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromRoot from './../redux-states/reducers';
import * as meetup from './../redux-states/actions/meetup';
import { getState } from './../redux-states/util';
import { getMeetupsBySearchTerm, getGroupBySearchTerm } from './../redux-states/selectors';

@Injectable()
export class MeetupFacade {

    constructor(private store: Store<fromRoot.State>) { }

    loadMeetups() {
        let state: fromRoot.State = getState(this.store);

        this.store.dispatch(new meetup.LoadMeetupsAction({
            topics: state.meetup.selectedTopics.join(' '),
            latitude: state.meetup.coordinates.latitude,
            longitude: state.meetup.coordinates.longitude,
        }));
    }

    loadGroups() {
        let state: fromRoot.State = getState(this.store);

        this.store.dispatch(new meetup.LoadGroupsAction({
            topics: state.meetup.selectedTopics,
            latitude: state.meetup.coordinates.latitude,
            longitude: state.meetup.coordinates.longitude,
        }));
    }

    getTopics(): Observable<string[]> {
        return this.store.select(s => s.meetup.selectedTopics);
    }

    getMeetups(): Observable<Meetup[]> {
        return this.store.select(getMeetupsBySearchTerm);
    }

    getGroups(): Observable<MeetupGroup[]> {
        return this.store.select(getGroupBySearchTerm);
    }

    getViewSeleted(): Observable<string> {
        return this.store.select(s => s.meetup.viewGroupOrMeetupSelected);
    }

    getSearchTerm(): Observable<string> {
        return this.store.select(s => s.meetup.searchTerm);
    }

    updateSelectedView(newView: string) {
        this.store.dispatch(new meetup.UpdateSelectedViewAction(newView));

        if (newView == "groups") {
            this.loadGroups();
            return;
        }

        this.loadMeetups();
    }

    filterEventsOrGroup(searchText) {
        this.store.dispatch(new meetup.UpdateSearchTermAction(searchText));
    }
}