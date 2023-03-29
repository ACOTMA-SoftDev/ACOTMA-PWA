import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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
  usuario:string="";


  constructor(private http:HttpClient, private sant:DomSanitizer){
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

  copyToClipboard(){
    const textArea = document.createElement('textarea');

    textArea.value = this.base64String;

    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand('copy');

    textArea.remove();

    alert('basse65 string copied to clipboard succesfully!');
  }


  ngOnInit(): void {
    
  }

  enviarMensaje(){
    var imagenSend
    if (this.file){
      const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () =>{
      this.base64String = reader.result as string;
      this.base64Image = reader.result as  string;
      imagenSend=this.base64String      
      console.log(imagenSend)

      const datos = {
        Titulo_Pub:this.Titulo_Pub, 
        Descripcion_Pub:this.Descripcion_Pub,
        usuario:this.usuario,
        ImagenP:this.base64String
      }
      console.log(datos)
      let url="api/agregarPublicaciones"
      this.http.post(url,datos).toPromise().then((data:any)=>{
        console.log(data)
        location.reload();
      })

    }
    
    }

    
  }



}

