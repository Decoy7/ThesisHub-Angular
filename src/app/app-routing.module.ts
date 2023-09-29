import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LandingComponent} from "./landing/landing.component";
import {NotfoundComponent} from "./notFound/notfound.component";
import {ThesisListComponent} from "./thesis-list/thesis-list.component";
import {RequestedThesisComponent} from "./requested-thesis/requested-thesis.component";
import {AuthGuard} from "../services/AuthGuard";

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "landing", component: LandingComponent, canActivate:[AuthGuard], data: { roles: ['Student', 'Lecturer',"Admin"]}},
  {path: "thesis-list", component: ThesisListComponent, canActivate:[AuthGuard], data: { roles: ['Student', 'Lecturer']}},
  {path: "requested-thesis", component: RequestedThesisComponent, canActivate:[AuthGuard], data: { roles: ['Student', 'Lecturer']}},
  {path: "not-found", component: NotfoundComponent},
  {path: "**", redirectTo: "/not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
