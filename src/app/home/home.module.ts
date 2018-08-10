import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { LandingComponent } from './landing/landing.component';
import { MapComponent } from './map/map.component';
import { AddNewComponent } from './add-new/add-new.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent
}, {
  path: 'map',
  component: MapComponent
}, {
  path: 'add-new',
  component: AddNewComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places', 'geometry']
    })
  ],
  declarations: [LandingComponent, MapComponent, AddNewComponent]
})
export class HomeModule { }
