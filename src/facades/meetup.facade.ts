import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromRoot from './../redux-states/reducers';
import * as meetup from './../redux-states/actions/meetup';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class MeetupFacade {

    constructor(private store: Store<fromRoot.State>, private geolocation: Geolocation) { }

    getMeetups(topics) {

    }
}