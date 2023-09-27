import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {KeycloakService} from "./KeycloakService";
import {ToastrService} from "ngx-toastr";

export const adminAuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
  const keycloakService: KeycloakService = inject(KeycloakService);
  const toast: ToastrService = inject(ToastrService);

  if(keycloakService.hasRole("Admin")){
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

