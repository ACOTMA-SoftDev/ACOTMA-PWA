import { Component, OnInit } from '@angular/core';
import { UsuariosCrudService } from 'src/app/Servicios/usuarios-crud.service'; //importamos la clase desde el directorio
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-usuario',
  templateUrl: './registros-usuario.component.html',
  styleUrls: ['./registros-usuario.component.css'],
  providers: [UsuariosCrudService],
})
export class RegistrosUsuarioComponent implements OnInit{
  //creamos un contrucutor
  Usuarios:any=[];//recolectamos todos los datos para luego mostrarlos
  title = 'Usuarios';
  constructor(private UsuariosCrudService:UsuariosCrudService, private router:Router){}

    ngOnInit(){
      this.UsuariosCrudService.getUsuarios().subscribe(res =>{
        this.Usuarios=res;//de esta forma mostramos los datos
        console.log('Resp',res);
      })
  
    }

}
