import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from "@angular/router";
import {KeycloakService} from "../../../services/KeycloakService";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  isLoggedIn: boolean = true;
  role: string = localStorage.getItem("roles")!;

  constructor(private keycloakService: KeycloakService, private toast: ToastrService, private router: Router) {
  }

  Logout() {
    const access_token: string = localStorage.getItem("access_token")!;
    const refresh_token: string = localStorage.getItem("refresh_token")!;
    const username: string = localStorage.getItem("username")!;
    const password: string = localStorage.getItem("password")!;

    if (localStorage.getItem("access_token") != null && localStorage.getItem("refresh_token") != null) {
      this.keycloakService.Logout(access_token, refresh_token, username, password).subscribe({
        next: () => {
          console.log("You've been logged out!");
        }
      })
      localStorage.clear();
    }
    this.toast.success('Logged out successfully!', 'Logout', {
      progressBar: true,
      positionClass: "toast-bottom-center",
      closeButton: true
    });
    this.router.navigateByUrl("/login");
  }

  addUser() {
    console.log("add user clicked");
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
