import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/placesApiClient';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];
  
  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private placesApi:PlacesApiClient, private mapService:MapService) { //manda a llamar la funcion 
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]>{ //funcion para conocer la ubicacion del usuario
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
        this.useLocation = [coords.longitude, coords.latitude];
        resolve(this.useLocation);
        },
        (err)=>{
          alert('NO SE ENCUNETRA DISPONIBLE!!')
          console.log(err)
          reject();
        }
      )
    });
  }

  getPlacesByQuery(query:string = ''){
    //todo: evaluar cuando query es nulo

    if (query.length===0){
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }


    this.isLoadingPlaces = true;

    if (!this.useLocation) throw Error('NO HAY LOCALIZACION');
    this.isLoadingPlaces = true;

    this.placesApi.get<PlacesResponse>( `/${query}.json`,{
      params:{
        proximity: this.useLocation.join(',')
      }
    })
    .subscribe(resp=>{
      this.isLoadingPlaces = false;
      this.places = resp.features;
      this.mapService.creatEMarkersFromPlaces(this.places, this.useLocation!);
    });
  }

  deletePlaces(){
    this.places = [];
  }
}
