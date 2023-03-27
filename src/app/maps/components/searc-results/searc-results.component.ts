import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-searc-results',
  templateUrl: './searc-results.component.html',
  styleUrls: ['./searc-results.component.css']
})
export class SearcResultsComponent {

  public selectedId: String ='';

  constructor (private placesService:PlacesService, private mapService:MapService){}

  get IsLoadingPlaces(): boolean{
    return this.placesService.isLoadingPlaces;
  }

  get places():Feature[] {
    return this.placesService.places;
  }

  flyTo(place: Feature){
    this.selectedId = place.id;
    const[lng, lat]= place.center;
    this.mapService.flyTo([lng, lat]);
  }

  getDirections(place:Feature){
    if(!this.placesService.useLocation) throw Error('No hay userLocation')

    this.placesService.deletePlaces();
    
    const start =this.placesService.useLocation;
    const end = place.center as [number, number];

    this.mapService.getRouteBetweenPoints(start, end);
  }

}
