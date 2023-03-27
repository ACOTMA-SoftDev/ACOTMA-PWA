import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private placeService:PlacesService,
    private mapService:MapService
  ){}
    goToMyLocation(){
      if (!this.placeService.isUserLocationReady)throw Error('NO HAY UBICACION DE USUARIO');
      if (!this.mapService.isMapReady) throw Error('NO HAY DISPONIBLE');

      this.mapService.flyTo( this.placeService.useLocation!)
    }
  

}
