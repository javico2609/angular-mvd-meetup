import { Action } from '@ngrx/store';
import { type } from './../util';

export const ActionTypes = {
    LOAD_INIT_CONFIGURATION: type('[Layout] Load Init Configuration'),
    LOAD_INIT_CONFIGURATION_COMPLETE: type('[Layout] Load Init Configuration COMPLETE'),
    LOAD_INIT_CONFIGURATION_FAIL: type('[Layout] Load Init Configuration FAIL'),
    UPDATE_THEME: type('[Layout] Update Theme'),
    UPDATE_THEME_COMPLETE: type('[Layout] Updated Theme COMPLETE'),
    UPDATE_THEME_FAIL: type('[Layout] Updated Theme FAIL'),
    UPDATE_SHORTCUTS: type('[Layout] Update Shortcuts'),
    UPDATE_SHORTCUTS_COMPLETE: type('[Layout] Updated Shortcuts COMPLETE'),
    UPDATE_SHORTCUTS_FAIL: type('[Layout] Updated Shortcuts FAIL'),
    UPDATE_LANG: type('[Layout] Update LANG'),
    UPDATE_LANG_COMPLETE: type('[Layout] Updated LANG COMPLETE'),
    UPDATE_LANG_FAIL: type('[Layout] Updated LANG FAIL'),
    LOAD_NOTIFICATION_COMPLETE: type('[Layout] Load NOTIFICATION COMPLETE'),
    LOAD_NOTIFICATION_FAIL: type('[Layout] Load NOTIFICATION FAIL')
};

export class LoadInitConfigurationAction implements Action {
    type = ActionTypes.LOAD_INIT_CONFIGURATION;
    constructor(public payload: any = {}) { }
}

export class LoadInitConfigurationCompleteAction implements Action {
    type = ActionTypes.LOAD_INIT_CONFIGURATION_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadInitConfigurationFailAction implements Action {
    type = ActionTypes.LOAD_INIT_CONFIGURATION_FAIL;

    constructor(public payload: any) { }
}

export class UpdateThemeAction implements Action {
    type = ActionTypes.UPDATE_THEME;

    constructor(public payload: any) { }
}

export class UpdateThemeFailAction implements Action {
    type = ActionTypes.UPDATE_THEME_FAIL;

    constructor(public payload: any) { }
}

export class UpdateThemeCompleteAction implements Action {
    type = ActionTypes.UPDATE_THEME_COMPLETE;

    constructor(public payload: any) { }
}

export class UpdateShortcutsAction implements Action {
    type = ActionTypes.UPDATE_SHORTCUTS;

    constructor(public payload: any) { }
}

export class UpdateShortcutsFailAction implements Action {
    type = ActionTypes.UPDATE_SHORTCUTS_FAIL;

    constructor(public payload: any) { }
}

export class UpdateShortcutsCompleteAction implements Action {
    type = ActionTypes.UPDATE_SHORTCUTS_COMPLETE;

    constructor(public payload: any) { }
}

export class UpdateLangAction implements Action {
    type = ActionTypes.UPDATE_LANG;

    constructor(public payload: any) { }
}

export class UpdateLangFailAction implements Action {
    type = ActionTypes.UPDATE_LANG_FAIL;

    constructor(public payload: any) { }
}

export class UpdateLangCompleteAction implements Action {
    type = ActionTypes.UPDATE_LANG_COMPLETE;

    constructor(public payload: any) { }
}

export class LoadNotificationFailAction implements Action {
    type = ActionTypes.LOAD_NOTIFICATION_FAIL;

    constructor(public payload: any) { }
}

export class LoadNotificationCompleteAction implements Action {
    type = ActionTypes.LOAD_NOTIFICATION_COMPLETE;

    constructor(public payload: any) { }
}

export type Actions =
    LoadInitConfigurationAction |
    LoadInitConfigurationCompleteAction |
    LoadInitConfigurationFailAction |
    UpdateThemeAction |
    UpdateThemeCompleteAction |
    UpdateThemeFailAction |
    UpdateShortcutsAction |
    UpdateShortcutsCompleteAction |
    UpdateShortcutsFailAction |
    UpdateLangAction |
    UpdateLangCompleteAction |
    UpdateLangFailAction |
    LoadNotificationCompleteAction |
    LoadNotificationFailAction;
