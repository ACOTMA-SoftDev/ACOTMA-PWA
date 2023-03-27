import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 //instalamos el siguiente comando: npm i --save-dev @types/mapbox-gl
 //importamos en el archivo tsconfig.json esto allowSyntheticDefaultImports
Mapboxgl.accessToken = 'pk.eyJ1IjoiZ29kd2lsbHk1MDAwIiwiYSI6ImNsZm9weGNwZTBqZWw0MHBqeDJubnlvMHoifQ.Q16Zoz1xothtWo29oKV_zw';
//importamos el token
if(!navigator.geolocation){
  alert('navegador no soporta geolocalizacion"');
  throw new Error("navegador no soporta geolocalizacion")
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
