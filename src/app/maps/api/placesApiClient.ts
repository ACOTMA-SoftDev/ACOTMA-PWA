import { Injectable } from "@angular/core";
import {HttpClient, HttpHandler,HttpParams} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class PlacesApiClient extends HttpClient {
    public baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

    constructor (handler: HttpHandler){
    super(handler)//cree mi propia Http perzonalizado
    }

    public override get<T>(url: string, options:{
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
    }){
        url = this.baseUrl + url;

        return super.get<T>(url,{
            params:{
                limit: 2,
                language:'es',
                access_token: 'pk.eyJ1IjoiZ29kd2lsbHk1MDAwIiwiYSI6ImNsZm9weGNwZTBqZWw0MHBqeDJubnlvMHoifQ.Q16Zoz1xothtWo29oKV_zw',
                ...options.params
            }
        });
    }
}