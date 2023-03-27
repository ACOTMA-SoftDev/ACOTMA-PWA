import { Injectable } from '@angular/core';
import { LngLat, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  getRouteBetweenPoints(start: [number, number], end: [number, number]) {
    throw new Error('Method not implemented.');
  }

  private map?: Map;
  private markers: Marker[]=[];

  get isMapReady(){
    return !!this.map;
  }

  setMap(map:Map){
    this.map = map;
  }

  flyTo(coords: LngLatLike){
    if(!this.isMapReady) throw Error('el mapa no esta listo');
    this.map?.flyTo({
      zoom:14,
      center: coords
    })
  }

  creatEMarkersFromPlaces( places: Feature[], userLocation: [number,number]){
    if(!this.map) throw Error('mapa no inicializado');

    this.markers.forEach(marker => marker.remove());
    const newMarkers = [];

    for (const place of places) {//muestra detalles del lugar que buscamos
      const[ lng, lat] = place.center;
      const popup = new Popup()
      .setHTML(`
      <h6=>${place.text}</h6>
      <span>${place.place_name}</span>
      `);

      const newMarker = new Marker()
      .setLngLat([lng,lat])
      .setPopup(popup)
      .addTo(this.map);

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers;

    if (places.length === 0) return;


    const bounds = new LngLatBounds();

      newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
      bounds.extend(userLocation);
    

    this.map.fitBounds(bounds,{
      padding:200
    })
  }
}
