import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  Titulo_Pub!: string;
  Descripcion_Pub!:string;
  usuario:string="";
  ImagenP: any=[];
  

  constructor(private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){}

  capturarFile(event:any){
    const archivoCapturado = event.target.files[0]
    this.ImagenP.push(archivoCapturado)
  }

  enviarMensaje(){
    const datos = {
      Titulo_Pub:this.Titulo_Pub, 
      Descripcion_Pub:this.Descripcion_Pub,
      usuario:this.usuario,
      ImagenP:this.ImagenP
    }
    let url="api/agregarPublicaciones"
    this.http.post(url,datos).toPromise().then((data:any)=>{
      console.log(data)
      location.reload();
    })
    
  }



}

