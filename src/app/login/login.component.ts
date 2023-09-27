import {Component} from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username?: string;
  password?: string;

  constructor(private keycloakService: KeycloakService) {
  }

  Login() {
      this.keycloakService.login();
  }
}

