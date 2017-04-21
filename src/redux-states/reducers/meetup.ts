import * as meetup from '../actions/meetup';
import { tassign } from 'tassign';
import * as _ from 'lodash';

export interface Coordinates {
    latitude: number;
    longitude: number;
}

export interface State {
    coordinates: Coordinates
}

const initialState: State = {
    coordinates: { latitude: -34.9058796, longitude: -56.140805699999994 }
};

export function reducer(state = initialState, action: meetup.Actions): State {
    switch (action.type) {
       
        default:
            return state;
    }
}
