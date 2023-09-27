import { Component } from '@angular/core';
import {ThesisService} from "../../services/thesis.service";

@Component({
  selector: 'app-thesis-list',
  templateUrl: './thesis-list.component.html',
  styleUrls: ['./thesis-list.component.scss']
})
export class ThesisListComponent {
  constructor(private thesisService: ThesisService) {
  }
}
