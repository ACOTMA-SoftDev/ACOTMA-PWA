import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-incidencias',
  templateUrl: './card-incidencias.component.html',
  styleUrls: ['./card-incidencias.component.css']
})
export class CardIncidenciasComponent {

  accidentes:any=[];

  constructor ( private http:HttpClient){
  };

  getAccidenteAHT(){
   this.http.get('https://prueba252.somee.com/api/Informe_de_Accidente_de_hoy').subscribe(data=>{
    console.log(data)
    this.accidentes=data
   })
  }

  ngOnInit(): void {
    setInterval(() => {
    this.getAccidenteAHT();
  },1000)
  }


}
