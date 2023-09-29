import {Component, OnInit} from '@angular/core';
import {ThesisService} from "../../services/thesis.service";
import {ToastrService} from "ngx-toastr";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  length!: number;
  isLoggedIn: boolean = false;

  constructor(private thesisService: ThesisService, private toast: ToastrService, private readonly keycloak: KeycloakService) {}

  async ngOnInit() {
    if (this.isLoggedIn) {
      this.isLoggedIn = await this.keycloak.isLoggedIn();
      this.thesisService.getAllThesis().subscribe({
        next: data => {
          this.length = data.length;
        },
        error: () => {
          this.toast.error('Error fetching data!', 'Error', {
            progressBar: true,
            positionClass: "toast-bottom-center",
            closeButton: true
          });
        }
      })

    }

  }

}
