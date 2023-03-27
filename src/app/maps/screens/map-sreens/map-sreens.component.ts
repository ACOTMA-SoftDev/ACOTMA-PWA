import { Component, OnInit} from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-sreens',
  templateUrl: './map-sreens.component.html',
  styleUrls: ['./map-sreens.component.css']
})
export class MapSreensComponent{

  constructor (private placesService: PlacesService){}

  get isUserLocationReady(){ //funcion para mostrar el mapa o no sea dependiendo el caso
    return this.placesService.isUserLocationReady;
  }
}
