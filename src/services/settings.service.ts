import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Injectable()
export class SettingsService {

    constructor(private geolocation: Geolocation) { }

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

    loadGeolocation(): Observable<Geoposition> {
        return Observable.fromPromise(this.geolocation.getCurrentPosition());
    }
}