import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-incidencias-tec',
  templateUrl: './incidencias-tec.component.html',
  styleUrls: ['./incidencias-tec.component.css']
})
export class IncidenciasTecComponent {

  ServicioEst!:string;
  NEco!:string;
  EquipoAfectado!:string;
  IdEquipoA!:string;
  Falla!:string;
  Estado=null;
  verSeleccion:any;
  Capturar(){
    this.verSeleccion = this.EquipoAfectado;
    console.log()
    }


  constructor(private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){}

  enviarInformeTec(){
    const datos = {
      Equipo_afectado:this.verSeleccion,
      Estado:this. Estado,
      Falla:this.Falla,
      Id_equipo_afectado:this.IdEquipoA,
      Servicio:this.ServicioEst,
      VehiculoECO:this.NEco, 
     
     
     
    }
    console.log(datos)

    let url="https://prueba252.somee.com/api/agregar_nueva_incidencia_tecnologica"
    this.http.post(url,datos).toPromise().then((data:any)=>{
      console.log(data)
      location.reload();
    })
    
  }



}
