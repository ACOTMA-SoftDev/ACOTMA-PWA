import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { UsuariosCrudService } from 'src/app/Servicios/usuarios-crud.service'; //importamos la clase desde el directorio
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-usuario',
  templateUrl: './registros-usuario.component.html',
  styleUrls: ['./registros-usuario.component.css'],
  //providers: [UsuariosCrudService],
})
export class RegistrosUsuarioComponent implements OnInit{
  //creamos un contrucutor
  Usuarios:any=[];//recolectamos todos los datos para luego mostrarlos
  term:any;

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Registro de usuarios';

   getAllRegistros(){

    this.http.get('https://pruebaacotma2.somee.com/api/ver_Registro_de_Asignacion_de_Radios').subscribe(data=>{
      console.log(data)
      this.Usuarios=data
    })
  }

  ngOnInit(): void {
    this.getAllRegistros();
  }

}
