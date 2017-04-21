import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MeetupService {
    private baseUrlV1 = "https://api.meetup.com/";
    private baseUrlV2 = "https://api.meetup.com/2/";
    private apiKey = "363f41346627aa74804265819425c";

    CATEGORIES = {
        TECH: 34
    }

    constructor(public http: Http, public jsonp: Jsonp) { }

    get(endpoint: string, params?: any, jsonp: boolean = true, options?: RequestOptions) {
        options = new RequestOptions();

        let p = new URLSearchParams();
        if (params) {
            for (let k in params) {
                p.set(k, params[k]);
            }
        }

        if (jsonp) {
            p.set('callback', 'JSONP_CALLBACK');
        }

        p.set('key', this.apiKey);

        options.search = !options.search && p || options.search;

        return jsonp
            ? this.jsonp.request(endpoint, options).map(res => res.json())
            : this.http.get("https://crossorigin.me/" + endpoint, options).map(res => res.json());
    }

    getMeetups(topics, lat?, long?): any {
        let params = {
            // city     : city,
            text: topics || '',
            time: ',1w',
            category: this.CATEGORIES.TECH,
        }

        if (lat && long) {
            params['lat'] = lat;
            params['lon'] = long;
        }

        let endpoint = 'open_events';
        return this.get(this.baseUrlV2 + endpoint, params);
    }
}