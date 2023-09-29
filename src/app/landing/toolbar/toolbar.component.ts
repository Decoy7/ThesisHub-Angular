import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  constructor(private readonly keycloak: KeycloakService, private router: Router) {
    this.keycloak.getToken().then(token => {
      localStorage.setItem("access_token",token);
      console.log(token);
    })
  }

  Logout() {
    this.keycloak.logout();
    localStorage.clear();
  }

  navigateToThesisList() {
    console.log("navigate to thesis list clicked");
    this.router.navigateByUrl("/thesis-list");
  }

  requestedThesisAssignments() {
    console.log("redirect requested thesis clicked");
    this.router.navigateByUrl("/requested-thesis")
  }

  navigateBack() {
    this.router.navigateByUrl("landing");
  }


}
