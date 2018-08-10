import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../../animations';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class AddNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
