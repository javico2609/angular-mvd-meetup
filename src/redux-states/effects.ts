import { EffectsModule } from '@ngrx/effects';
import { SettingsEffects } from './effects/settings.effect';

export const AppEffectModules = [
    EffectsModule.run(SettingsEffects)
];