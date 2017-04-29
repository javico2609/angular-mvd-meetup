import { Injectable } from '@angular/core';
import { Http, Jsonp, RequestOptions, URLSearchParams } from '@angular/http';

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

    getMeetups(topics, lat?, long?): Observable<any> {
        let params = {
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

    fetchMeetupGroup(topic, lat, long) {
        let params = {
            text: topic || '',
            lat: lat,
            lon: long,
            category: this.CATEGORIES.TECH,
        }

        let endpoint = "find/groups";
        return this.get(this.baseUrlV1 + endpoint, params);
    }

    getMeetupGroups(topics, lat?, long?): any {
        let requests: Observable<any>[] = [];

        for (let topic in topics) {
            requests.push(this.fetchMeetupGroup(topic, lat, long));
        }

        if (topics.length === 0)
            requests.push(this.fetchMeetupGroup('', lat, long));

        return Observable.forkJoin(requests).flatMap((result: any) => result.map(meetup => meetup.data));
    }

    getMeetupHosts(meetupUrl, eventId): any {
        let endpoint = `${meetupUrl}/events/${eventId}/hosts`;
        return this.get(this.baseUrlV1 + endpoint, null, false);
    }

    getMeetupComments(meetupUrl, eventId): any {
        let endpoint = `${meetupUrl}/events/${eventId}/comments`;
        return this.get(this.baseUrlV1 + endpoint, null, false);
    }

    getGroupMembers(group) {
        let params = {
            'group_id': group.id,
            'group_urlname': group.urlname
        }
        return this.get(this.baseUrlV2 + 'members', params);
    }

    getMemberDetails(memberId) {
        let endpoint = `member/${memberId}`;
        return this.get(this.baseUrlV2 + endpoint, null, false);
    }
}