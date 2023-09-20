import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "../../services/KeycloakService";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;

  constructor(private keycloakService: KeycloakService, private toast: ToastrService, private router: Router) {
  }

  Login() {
    if (this.username != undefined && this.password != undefined) {
      this.keycloakService.Login(this.username, this.password).subscribe({
        next: data => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          localStorage.setItem("expires_in", data.expires_in);
          localStorage.setItem("refresh_expires_in", data.refresh_expires_in);
          localStorage.setItem("session_id",data.session_state);
          localStorage.setItem("username",<string>this.username);
          localStorage.setItem("password",<string>this.password);
          localStorage.setItem("roles",(JSON.parse(atob(data.access_token.split('.')[1]))).resource_access.frontend.roles);

          this.toast.success('Logged in successfully!', 'Login', {
            progressBar: true,
            positionClass: "toast-bottom-center",
            closeButton: true
          });
          this.router.navigateByUrl("/landing");
        },
        error: () => {
          this.toast.error('Credentials are wrong!', 'Error', {
            progressBar: true,
            positionClass: "toast-bottom-center",
            closeButton: true
          });
        }
      });
    }else{
      this.toast.error('Credentials are missing!', 'Error', {
        progressBar: true,
        positionClass: "toast-bottom-center",
        closeButton: true
      });
    }
  }

  ngOnInit(): void {
  }
}
