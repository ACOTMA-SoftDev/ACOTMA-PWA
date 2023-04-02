import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pedir-vehiculo',
  templateUrl: './pedir-vehiculo.component.html',
  styleUrls: ['./pedir-vehiculo.component.css']
})
export class PedirVehiculoComponent {

  Nombre_solicitante!:string;
  Marca_vehiculo!:string;
  Submarca!:string;
  Placa!:string;
  Tiempo!:string;
  Area_solicitante!:string;
  Actividades_a_realizar!:string;
  Registro_de_kilometraje!:string;

  constructor(private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){}

  enviarInformeLimpieza(){
    const datos = {

      Nombre_solicitante:this. Nombre_solicitante,
      Marca_vehiculo:this.Marca_vehiculo, 
      Submarca:this.Submarca,
      Placa:this.Placa,
      Tiempo:this.Tiempo,
      Area_solicitante:this.Area_solicitante,
      LimpiezaSanitarios:this.Actividades_a_realizar,
      Actividades_a_realizar:this.Actividades_a_realizar,
      Registro_de_kilometraje:this.Registro_de_kilometraje,
    }
    let url="https://prueba252.somee.com/api/agregar_RegistroVehicular"
    this.http.post(url,datos).toPromise().then((data:any)=>{
      console.log(data)
      location.reload();
    })
    
  }
}
