import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '' }
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
