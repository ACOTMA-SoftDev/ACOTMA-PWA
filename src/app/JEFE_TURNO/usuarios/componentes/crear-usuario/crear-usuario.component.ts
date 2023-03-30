import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent{

  usuario!: string;
  nombre!:string;
  apellidoP!:string;
  apellidoM!:string;
  pass!:string;

  constructor(private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){}

  enviarUsuarios(){
    const datos = {
      usuario:this.usuario,
      nombre:this.nombre,
      apellidoP:this.apellidoP,
      apellidoM:this.apellidoM,
      pass:this.pass

    }
    let url="https://prueba252.somee.com/api/agregar_usuarios"
    this.http.post(url,datos).toPromise().then((data:any )=>{
      console.log(data)
      location.reload();
    })

  }

} 
