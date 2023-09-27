import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {KeycloakService} from "./KeycloakService";
import {inject} from "@angular/core";
import {ToastrService} from "ngx-toastr";

export const studentAuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot,state: RouterStateSnapshot) =>{
  const keycloakService: KeycloakService = inject(KeycloakService);
  const toast: ToastrService = inject(ToastrService);

  if(keycloakService.hasRole("Student")){
    return true;
  } else {
    toast.error('Role is not sufficient!', 'Error', {
      progressBar: true,
      positionClass: "toast-bottom-center",
      closeButton: true
    });
    return false;
  }
}
