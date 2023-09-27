import {Component} from '@angular/core';
import {Router} from "@angular/router";
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  isLoggedIn: boolean = true;
  role: string = localStorage.getItem("roles")!;

  constructor(private keycloakService: KeycloakService, private router: Router) {
  }

  Logout() {
    this.keycloakService.logout();
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
