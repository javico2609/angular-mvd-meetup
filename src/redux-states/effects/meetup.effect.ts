import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as meetup from './../actions/meetup';
import { MeetupService } from './../../services';

@Injectable()
export class MeetupEffects {
    constructor(
        private actions$: Actions,
        private meetupService: MeetupService
    ) { }

    @Effect() loadMeetups$ = this.actions$
        .ofType(meetup.ActionTypes.LOAD_INIT_MEETUPS)
        .map<Action, { topics: string, latitude: number, longitude: number }>(toPayload)
        .switchMap((payload) => this.meetupService.getMeetups(payload.topics, payload.latitude, payload.longitude)
            .map(payload => new meetup.LoadMeetupsCompleteAction(payload.results))
            .catch(error => Observable.of(new meetup.LoadMeetupsFailAction({ error })))
        );

    @Effect() loadGroups$ = this.actions$
        .ofType(meetup.ActionTypes.LOAD_INIT_GROUPS)
        .map<Action, { topics: string[], latitude: number, longitude: number }>(toPayload)
        .switchMap((payload) => this.meetupService.getMeetupGroups(payload.topics, payload.latitude, payload.longitude)
            .map(payload => new meetup.LoadGroupsCompleteAction(payload.data))
            .catch(error => Observable.of(new meetup.LoadGroupsFailAction({ error })))
        );
}