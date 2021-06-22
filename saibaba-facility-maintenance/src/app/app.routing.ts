import { RouterModule, Routes } from "@angular/router";
import { FmusersComponent } from "./fmusers/fmusers.component";
import { ViewUsersComponent } from "./view-users/view-users.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'addUser', pathMatch: 'full'},
    {path: 'addUser', component: FmusersComponent},
    {path: 'viewUsers', component: ViewUsersComponent},
];


export const routing = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});