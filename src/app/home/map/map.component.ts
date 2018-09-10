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

  interval1;
  interval2;
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
    clearInterval(this.interval1);
    clearInterval(this.interval2);
  }

  onResize(event) {
    this.height = event.target.innerHeight;
    this.width = event.target.innerWidth;
    this.clear();
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

    this.interval1 = setInterval(e => {

      this.counter++;
      this.bottom++;
      this.right = this.right + slope;

      // this.opacity = 1 - this.counter * (1 / (this.height / 2));

      if (this.counter > (this.height) / 2) {
        this.opacity = 0;
        this.markerOpacity = 1;
        clearInterval(this.interval1);
        // this.animation = 'BOUNCE';
      }

    }, 1);
  }

  play2() {
    this.opacity = 1;

    this.right = (this.width / 2) - (this.markerWidth / 2);

    this.interval2 = setInterval(e => {


      if (this.counter > (this.height / 2 ) / 2) {
        this.counter = this.counter + 0.75;
        this.bottom = this.bottom + 0.75;
      } else {
        this.counter++;
        this.bottom++;
      }

      if (this.counter > (this.height) / 2) {
        this.opacity = 0;
        this.markerOpacity = 1;
        clearInterval(this.interval2);
        // this.animation = 'BOUNCE';
      }

    }, 1);
  }


  resetStart() {
    this.clear();
    this.play();
  }

  resetStart2() {
    this.clear();
    this.play2();
  }

  clear() {
    this.bottom = 0;
    this.right = -this.markerWidth / 2;
    this.counter = 0;
    this.opacity = 0;
    this.markerOpacity = 0;
  }


}
