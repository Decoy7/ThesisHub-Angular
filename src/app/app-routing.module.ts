import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LandingComponent} from "./landing/landing.component";
import {NotfoundComponent} from "./notFound/notfound.component";
import {ThesisListComponent} from "./thesis-list/thesis-list.component";
import {RequestedThesisComponent} from "./requested-thesis/requested-thesis.component";

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "landing", component: LandingComponent},
  {path: "thesis-list", component: ThesisListComponent},
  {path: "requested-thesis", component: RequestedThesisComponent},
  {path: "not-found", component: NotfoundComponent},
  {path: "**", redirectTo: "/not-found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
