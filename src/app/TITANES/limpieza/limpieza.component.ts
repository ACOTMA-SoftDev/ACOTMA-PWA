import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.component.html',
  styleUrls: ['./limpieza.component.css']
})
export class LimpiezaComponent {
  
  Estacion!:string;
  LimpiezaPiso=false;
  LimpiezaVidrio= false;
  LimpiezaServicio = false;
  LimpiezaEstructura = false;
  LimpiezaTorniquetez = false;
  LimpiezaSanitarios = false;
  Observaciones!:string;
  usuario:string="Titan 1";

  constructor(private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){}

  enviarInformeLimpieza(){
    const datos = {

      Estacion:this.Estacion,
      LimpiezaPiso:this.LimpiezaPiso, 
      LimpiezaVidrio:this.LimpiezaVidrio,
      LimpiezaAreaServicios:this.LimpiezaServicio,
      LimpiezaAreaEstructura:this.LimpiezaEstructura,
      LimpiezaTorniquetes:this.LimpiezaTorniquetez,
      LimpiezaSanitarios:this.LimpiezaSanitarios,
      Observaciones:this.Observaciones,
      usuario:this.usuario,
    }
    let url="https://prueba252.somee.com/api/agregar_informeLimpieza_del_dia_hoy"
    this.http.post(url,datos).toPromise().then((data:any)=>{
      console.log(data)
      location.reload();
    })
    
  }


}
