import { Routes } from '@angular/router';
import { GiveConsentComponent } from './components/give-consent/give-consent.component';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'give-consent',
        pathMatch: 'full'
    },
    {
        path: 'give-consent',
        component: GiveConsentComponent
    },
    {
        path: 'consents',
        component: CollectedConsentsComponent
    },
];
