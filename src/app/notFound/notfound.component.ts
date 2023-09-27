import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notFound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
  constructor(private router: Router) {
  }

  return() {
    this.router.navigateByUrl("/login");
  }
}
