import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSreensComponent } from './screens/map-sreens/map-sreens.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearcResultsComponent } from './components/searc-results/searc-results.component';



@NgModule({
  declarations: [
    MapSreensComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMyLocationComponent,
    AngularLogoComponent,
    SearchBarComponent,
    SearcResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapSreensComponent //LO EXPORTAMOS AQUI
  ]
})
export class MapsModule { }
//instalamos el siguiente componente npm install --save mapbox-gl
