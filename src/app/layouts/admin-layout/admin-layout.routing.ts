import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProviderListComponent } from 'src/app/pages/provider-list/provider-list.component';
import { ProviderAddComponent } from 'src/app/pages/provider-add/provider-add.component';
import { ProviderEditComponent } from 'src/app/pages/provider-edit/provider-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'providerList',      component: ProviderListComponent },
    { path: 'providerAdd',      component: ProviderAddComponent },
    { path: 'providerEdit/:id',      component: ProviderEditComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
