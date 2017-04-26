import { Meetup, MeetupGroup } from '../redux-states/reducers/meetup';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromRoot from './../redux-states/reducers';
import * as meetup from './../redux-states/actions/meetup';
import { getMeetupsBySearchTerm, getGroupBySearchTerm } from './../redux-states/selectors';

@Injectable()
export class MeetupFacade {

    constructor(private store: Store<fromRoot.State>) { }

    loadMeetups() {
        this.store.dispatch(new meetup.LoadMeetupsAction());
    }

    loadGroups() {
        this.store.dispatch(new meetup.LoadGroupsAction());
    }

    getTopics(): Observable<string[]> {
        return this.store.select(s => s.meetup.selectedTopics);
    }

    updateTopics(topics: string[]) {
        this.store.dispatch(new meetup.UpdateFilterTopicAction(topics));
    }

    deleteTopic(topic: string) {
        this.store.dispatch(new meetup.RemoveFilterTopicAction(topic));
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
    }

    filterEventsOrGroup(searchText) {
        this.store.dispatch(new meetup.UpdateSearchTermAction(searchText));
    }
}