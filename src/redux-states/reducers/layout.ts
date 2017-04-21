import * as layout from '../actions/layout';
import { tassign } from 'tassign';
import * as _ from 'lodash';

export interface State {
  theme: string,
  lang: string,
  shortcuts: any[]
}

const initialState: State = {
  theme: 'default-theme',
  lang: 'en',
  shortcuts: []
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.ActionTypes.LOAD_INIT_CONFIGURATION_COMPLETE: {
      return {
        lang: action.payload.lang,
        theme: action.payload.theme,
        shortcuts: action.payload.shortcuts
      };
    }

    case layout.ActionTypes.UPDATE_THEME_COMPLETE:
      return tassign(state, { theme: action.payload.theme });

    case layout.ActionTypes.UPDATE_SHORTCUTS_COMPLETE:
      return tassign(state, { shortcuts: action.payload.shortcuts });

    case layout.ActionTypes.UPDATE_LANG_COMPLETE:
      return tassign(state, { lang: action.payload.lang });

    default:
      return state;
  }
}
