import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
