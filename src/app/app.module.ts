import {NgModule} from '@angular/core';
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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
