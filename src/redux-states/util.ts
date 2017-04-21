import { Store } from '@ngrx/store';
export let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}

import 'rxjs/add/operator/take';
import * as fromRoot from './reducers';
 
export function getState(store: Store<fromRoot.State>): fromRoot.State {
    let state: fromRoot.State;
 
    store.take(1).subscribe(s => state = s);
 
    return state;
}