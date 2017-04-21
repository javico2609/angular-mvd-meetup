import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { LayoutFacade, MeetupFacade } from './../facades';
import { SettingsService, MeetupService } from './../services';
import { CacheService } from "ionic-cache/ionic-cache";

export const SERVICES_PROVIDERS = [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CacheService,
    LayoutFacade,
    SettingsService,
    MeetupService,
    MeetupFacade
];

