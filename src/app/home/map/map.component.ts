import { Component, OnInit, OnDestroy } from '@angular/core';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@fadeInAnimation]': '', '(window:resize)': 'onResize($event)' }
})


export class MapComponent implements OnInit, OnDestroy {

  lat = 51.678418;
  lng = 7.809007;

  markerHeight = 122;
  markerWidth = 44;

  interval;
  right = -this.markerWidth / 2;
  bottom = 0;
  counter = 0;
  opacity = 0;
  height: any;
  width: any;
  footer = 54;
  animation = '';
  markerOpacity = 0;

  constructor() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  onResize(event) {
    this.height = event.target.innerHeight;
    this.width = event.target.innerWidth;
    this.resetStart();
  }

  play() {
    this.opacity = 1;
    const p1 = {
      x: 0,
      y: 0
    };

    const p2 = {
      x: this.width / 2,
      y: this.height / 2
    };

    const slope = (p1.x - p2.x) / (p1.y - p2.y);

    this.interval = setInterval(e => {

      this.counter++;
      this.bottom++;
      this.right = this.right + slope;

      // this.opacity = 1 - this.counter * (1 / (this.height / 2));

      if (this.counter > (this.height) / 2) {
        this.opacity = 0;
        this.markerOpacity = 1;
        clearInterval(this.interval);
        // this.animation = 'BOUNCE';
      }

    }, 1);
  }


  resetStart() {
    this.clear();
    this.play();
  }

  clear() {
    this.bottom = 0;
    this.right = -this.markerWidth / 2;
    this.counter = 0;
    this.opacity = 0;
    this.markerOpacity = 0;
  }


}
