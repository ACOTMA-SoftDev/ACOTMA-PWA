import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-incidencias',
  templateUrl: './card-incidencias.component.html',
  styleUrls: ['./card-incidencias.component.css']
})
export class CardIncidenciasComponent {

  accidentes:any=[];

  constructor (private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){
  };

  getAccidenteAHT(){
    this.http.get('https://prueba252.somee.com/api/Informe_de_Accidente_de_hoy').subscribe(response=>{
     this.accidentes=response
     console.log(this.accidentes)
     
    })
    }   
   ngOnInit(): void {
    setInterval(() => {
       this.getAccidenteAHT();
      },1000)
   }


}
