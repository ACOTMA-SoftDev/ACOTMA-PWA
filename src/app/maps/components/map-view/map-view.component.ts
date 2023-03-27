import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker} from 'mapbox-gl'; //Importamos el MAP
import { PlacesService } from '../../services';
import { MapService } from '../../services/map.service';
//import { OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild ('mapDiv')
  mapDivElement!: ElementRef


  constructor (private placesService: PlacesService, 
    private mapService: MapService){}


  ngAfterViewInit(): void {

    if (!this.placesService.useLocation) throw Error("No hay placesServices.userLocation");

    const map = new Map({
      container: this.mapDivElement.nativeElement, // mANDAMOS A LLAMAR EL HTML DONDE SE ENCUENTRA E MAPA
      style: 'mapbox://styles/mapbox/streets-v12', // style URL dark-v10 ejemplo
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });


      const popup = new Popup() //Creo el mensaje de Popup, AQUI ES DONDE AGREGAREMOS EL NOMBRE DEL USUARIO QUE CORRESPONDE AL TITAN QUE UTILIZA LA APLICACION
  .setHTML(
  
  `<h6>Aqui Estoy</h6>
  <span>Estoy en este lugar del mundo</span>`
  );

  new Marker({color:'red'})//marcamos la ubicacion en la que estamos
  .setLngLat(this.placesService.useLocation)
  .setPopup(popup)
  .addTo(map)

  this.mapService.setMap( map );//mandamos a llamar nuestro servicio


  }

}
