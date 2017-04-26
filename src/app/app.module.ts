import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SERVICES_PROVIDERS, NATIVES_PROVIDERS } from '../providers/providers';
import { IonicStarterApp } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from '../redux-states/reducers';
import { AppEffectModules } from '../redux-states/effects';

@NgModule({
  declarations: [
    IonicStarterApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(IonicStarterApp),
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore(reducer, {}),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    /**
     * EffectsModule.run() sets up the effects class to be initialized
     * immediately when the application starts.
     *
     * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
     */
    ...AppEffectModules
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IonicStarterApp
  ],
  providers: [...SERVICES_PROVIDERS, NATIVES_PROVIDERS]
})
export class AppModule { }

