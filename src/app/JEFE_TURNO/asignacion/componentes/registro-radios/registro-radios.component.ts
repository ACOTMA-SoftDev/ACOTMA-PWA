import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { UsuariosCrudService } from 'src/app/Servicios/usuarios-crud.service'; //importamos la clase desde el directorio
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-radios',
  templateUrl: './registro-radios.component.html',
  styleUrls: ['./registro-radios.component.css']
})
export class RegistroRadiosComponent implements OnInit{

  //creamos un contrucutor
  asignaciones:any=[];//recolectamos todos los datos para luego mostrarlos
  term:any;

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Registro de usuarios';

   GetAsignacionRadios(){

    this.http.get('https://prueba252.somee.com/api/ver_Registro_de_Asignacion_de_Radios').subscribe(data=>{
      console.log(data)
      this.asignaciones=data
    })
  }

  ngOnInit(): void {
    this.GetAsignacionRadios();
  }
  
}
