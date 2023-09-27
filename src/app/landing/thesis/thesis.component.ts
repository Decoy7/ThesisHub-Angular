import {Component, OnInit} from '@angular/core';
import {Thesis} from "../../../models/Thesis";
import {ThesisService} from "../../../services/thesis.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})

export class ThesisComponent implements OnInit{
  public dataSource!: Thesis[];
  constructor(private thesisService: ThesisService, private toast:ToastrService) {}
  ngOnInit() {
    this.thesisService.getAllThesis().subscribe({
      next: data => {
        this.dataSource = data;
      },
      error: () => {
        this.toast.error('Error fetching data!', 'Error',{
          progressBar:true,
          positionClass:"toast-bottom-center",
          closeButton:true
        });
      }
    })
  }
  requestAssignment(thesisId:number){
    this.thesisService.requestAssignment(thesisId).subscribe({
      next:() =>{
        console.log(thesisId);
      },
      error: () => {
        this.toast.error('Error requesting assignment!', 'Error',{
          progressBar:true,
          positionClass:"toast-bottom-center",
          closeButton:true
        });
      }
    })
  }
}
