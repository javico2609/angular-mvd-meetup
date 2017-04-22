import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './effects/settings.effect';
import { MeetupEffects } from './effects/meetup.effect';

export const AppEffectModules = [
    EffectsModule.run(SettingsEffects),
    EffectsModule.run(MeetupEffects),
];