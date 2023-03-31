import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inf-tecnologicos',
  templateUrl: './inf-tecnologicos.component.html',
  styleUrls: ['./inf-tecnologicos.component.css']
})
export class InfTecnologicosComponent implements OnInit{
  term:any;
  InformeIncidenciasTec:any=[];//recolectamos todos los datos para luego mostrarlos

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Informe de accidentes';

   getAllEstacionesToday(){
    this.http.get('https://prueba252.somee.com/api/Informe_de_incidencias_tecnologicas_de_hoy').subscribe(data=>{
      console.log(data)
      this.InformeIncidenciasTec=data
    })
    }

  ngOnInit(): void {
    setInterval(() => {
    this.getAllEstacionesToday();
  }, 500)
  }
}