import { Routes } from '@angular/router';

import { VerhuurComponent } from '../verhuur/verhuur.component';
import { DetailsComponent } from '../details/details.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'verhuur', component: VerhuurComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'overOns', component: AboutComponent },
    { path: 'contactOns', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];