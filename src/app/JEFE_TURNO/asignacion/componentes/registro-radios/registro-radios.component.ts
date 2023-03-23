import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro-radios',
  templateUrl: './registro-radios.component.html',
  styleUrls: ['./registro-radios.component.css']
})
export class RegistroRadiosComponent {

  Asignacion:any=[];

  constructor ( private http:HttpClient){
  };

  getAsignacionRadios(){
   this.http.get('api/ver_Registro_de_Asignacion_de_Radios').subscribe(data=>{
      console.log(data)
      this.Asignacion=data
    })
  }

  ngOnInit(): void {
    this.getAsignacionRadios();
  }

}
