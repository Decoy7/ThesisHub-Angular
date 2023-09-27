import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './landing/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import {ToastrModule} from 'ngx-toastr';
import {ThesisComponent} from './landing/thesis/thesis.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {LandingComponent} from './landing/landing.component';
import {NotfoundComponent} from './notFound/notfound.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {ThesisListComponent} from './thesis-list/thesis-list.component';
import {RequestedThesisComponent} from './requested-thesis/requested-thesis.component';

import {KeycloakAngularModule} from "keycloak-angular";
import {KeycloakService} from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'ThesisHub',
        url: 'http://localhost:8080',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ThesisComponent,
    LoginComponent,
    LandingComponent,
    NotfoundComponent,
    ThesisListComponent,
    RequestedThesisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
