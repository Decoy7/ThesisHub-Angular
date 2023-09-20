import {Component} from '@angular/core';
import {Thesis} from "../../../models/Thesis";
import {User} from "../../../models/User";

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})

export class ThesisComponent {
  displayedColumns: string[] = ['name', 'date', 'assigned'];
  userMike = new User(1,2902,"Michael","Fotiadis","mfotiadis");
  userSimos = new User(2,2912,"Simos","Spirou","sspirou");
  dataSource = [
    new Thesis("Web Dev FaceBook But For Dogs",new Date("09/14/2023"),this.userMike),
    new Thesis("AnergosSoonTM",new Date("09/25/2023"),this.userSimos),

  ];

}
