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
   this.http.get('https://pruebaacotma2.somee.com/api/Informe_de_Accidente_de_hoy').subscribe(response=>{
    this.accidentes=response
    console.log(this.accidentes)
   })
  }

  ngOnInit(): void {
    setInterval(() => {
    this.getAccidenteAHT();
  }, 500)
  }


}
