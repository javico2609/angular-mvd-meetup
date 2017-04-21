import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromRoot from './../redux-states/reducers';
import * as layout from './../redux-states/actions/layout';

@Injectable()
export class LayoutFacade  {

    constructor(private store: Store<fromRoot.State>) { }

    loadInitConfigurationAction(): void {
        this.store.dispatch(new layout.LoadInitConfigurationAction())
    }

    getTheme(): Observable<string> {
        return this.store.select(store => store.layout.theme);
    }

    updateThemeAction(theme: string): void {
        this.store.dispatch(new layout.UpdateThemeAction({ theme: theme }));
    }
}