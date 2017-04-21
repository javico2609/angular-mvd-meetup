import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class SettingsService {

    constructor() { }

    setTheme(theme: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

    saveShortcuts(shortcuts: string[]): Promise<{ shortcuts: any[] }> {
        return new Promise((resolve, reject) => {
            resolve([
                { icon: 'cogs', title: 'Settings' },
                { icon: 'home', title: 'Home' },
            ]);
        });
    }

    loadInitConfiguration(): Observable<{ lang: string, theme: string, shortcuts: any[] }> {
        return Observable.of({
            lang: 'es', theme: 'hangouts-theme', shortcuts: [
                { icon: 'cogs', title: 'Settings' },
                { icon: 'home', title: 'Home' },
            ]
        })
    }
}