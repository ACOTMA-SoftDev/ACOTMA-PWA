import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-asignacion-radios',
  templateUrl: './asignacion-radios.component.html',
  styleUrls: ['./asignacion-radios.component.css']
})
export class AsignacionRadiosComponent{

  usuario!: string;
  Num_Radio!:Int16Array;
  Codigo_Radio!:string;
  Tarjeta_Maestra!:string;


  constructor(private http:HttpClient,private sanitizer:DomSanitizer){}

  enviarAsignacionRadios(){
    const datos = {
      usuario:this.usuario, 
      Num_Radio:this.Num_Radio,
      Codigo_Radio:this.Codigo_Radio,
      Tarjeta_Maestra:this.Tarjeta_Maestra
    }
    let url="https://prueba252.somee.com/api/agregar_Asignacion_de_Radios"
    this.http.post(url,datos).toPromise().then((data:any )=>{
      console.log(data)
      location.reload();
    })
    
  }

}
