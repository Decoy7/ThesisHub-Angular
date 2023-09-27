import {Component, OnInit} from '@angular/core';
import {ThesisService} from "../../services/thesis.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  length!: number;

  constructor(private thesisService: ThesisService, private toast: ToastrService) {
  }

  ngOnInit() {
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
