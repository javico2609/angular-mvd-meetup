import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as layout from './../actions/layout';
import * as meetup from './../actions/meetup';
import { SettingsService } from './../../services';

@Injectable()
export class SettingsEffects {
    constructor(
        private actions$: Actions,
        private settingsService: SettingsService
    ) { }

    @Effect() loadFrameworkCommonRequest$ = this.actions$
        .ofType(layout.ActionTypes.LOAD_INIT_CONFIGURATION)
        .map<Action, void>(toPayload)
        .switchMap(() => Observable.combineLatest(
            this.settingsService.loadInitConfiguration(),
            this.settingsService.loadGeolocation(),
            (settings, geolocation) => { return { settings: settings, geolocation: geolocation } }).take(1)
            .mergeMap((data: { settings: any, geolocation: any }) => {
                return [
                    new layout.LoadInitConfigurationCompleteAction(data.settings),
                    new meetup.LoadInitGeolocationCompleteAction(data.geolocation)
                ];
            })
            .catch(error => Observable.of(new layout.LoadInitConfigurationFailAction({ error })))
        );

    @Effect() loadInitConfig$ = this.actions$
        .ofType(layout.ActionTypes.LOAD_INIT_CONFIGURATION)
        .map<Action, void>(toPayload)
        .switchMap(() => this.settingsService.loadInitConfiguration()
            .map(settings => new layout.LoadInitConfigurationCompleteAction(settings))
            .catch(error => Observable.of(new layout.LoadInitConfigurationFailAction({ error })))
        );

    @Effect() updateTheme$ = this.actions$
        .ofType(layout.ActionTypes.UPDATE_THEME)
        .map<Action, { theme: string }>(toPayload)
        .switchMap((payload) => Observable.fromPromise(this.settingsService.setTheme(payload.theme))
            .map(() => new layout.UpdateThemeCompleteAction(payload))
            .catch(error => Observable.of(new layout.UpdateThemeFailAction({ error })))
        );

    @Effect() updateShortcuts$ = this.actions$
        .ofType(layout.ActionTypes.UPDATE_SHORTCUTS)
        .map<Action, { shortcuts: string[] }>(toPayload)
        .switchMap((payload) => Observable.fromPromise(this.settingsService.saveShortcuts(payload.shortcuts))
            .map((shortcuts) => new layout.UpdateShortcutsCompleteAction({ shortcuts: shortcuts }))
            .catch(error => Observable.of(new layout.UpdateShortcutsFailAction({ error })))
        );
}