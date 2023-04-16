import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
  base64Image!:string;
  base64String!:string;
  file!:File;
  Titulo_Pub!:string;
  Descripcion_Pub!:string;
  usuario:string="Titan 1";
//creamos las variables que necesiatmos

  constructor(private http:HttpClient, private sant:DomSanitizer, private location: Location,){
  }

  onFileChanged(event:any){
    this.file = event.target.files[0];
  }

  convertToBase64(){ //este fucion lo convierte a base 64
    if (!this.file){
      const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () =>{
      this.base64String = reader.result as string;
      this.base64Image = reader.result as  string;
      return;
    }
    }
  }

  ngOnInit(): void {
    
  }

  enviarMensaje(){
//al dar clic en el boton es guardar los datos en unavariable
      const datos = {
        Titulo_Pub:this.Titulo_Pub, 
        Descripcion_Pub:this.Descripcion_Pub,
        //ImagenP:this.base64String,
        //usuario:this.usuario,
      }
      
      console.log(datos)//y luego lo agrega a la base de datos con esta funcion

      let url="https://prueba252.somee.com/api/agregarPublicaciones"//aqui va e
      this.http.post(url,datos).toPromise().then((data:any)=>{
        console.log(data)
        location.reload();
      })

    }
    
    
    
  }
/*var imagenSend
if (this.file){
const reader = new FileReader();
reader.readAsDataURL(this.file);
reader.onload = () =>{
this.base64String = reader.result as string;

  imagenSend=this.base64String   
}}*/


