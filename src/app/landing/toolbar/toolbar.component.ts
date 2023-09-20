import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";
import {KeycloakService} from "../../../services/KeycloakService";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  isLoggedIn:boolean = true;

  constructor(private keycloakService: KeycloakService, private toast:ToastrService, private router:Router) {}

  Logout(){
    // @ts-ignore
    const access_token: string = localStorage.getItem("access_token");
    // @ts-ignore
    const refresh_token: string  = localStorage.getItem("refresh_token");
    // @ts-ignore
    const username: string  = localStorage.getItem("username");
    // @ts-ignore
    const password: string  = localStorage.getItem("password");

    if(localStorage.getItem("access_token") != null && localStorage.getItem("refresh_token") != null){
      this.keycloakService.Logout(access_token,refresh_token,username,password).subscribe({
        next: data => {
          console.log("You've been logged out!");
        }
      })
      this.toast.success('Logged out successfully!', 'Logout',{
        progressBar:true,
        positionClass:"toast-bottom-center",
        closeButton:true
      });
      localStorage.clear();
      this.router.navigateByUrl("/login");
    }
  }


}
