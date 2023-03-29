import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-informe-percances',
  templateUrl: './informe-percances.component.html',
  styleUrls: ['./informe-percances.component.css']
})
export class InformePercancesComponent implements OnInit{

  base64Image1!:string;
  base64String1!:string;
  file!:File;

  base64Image2!:string;
  base64String2!:string;
  file2!:File;

  base64Image3!:string;
  base64String3!:string;
  file3!:File;

  VehiculoECO!:String;
  TipoUnidad!:string;
  Credencial!:String;
  Conductor!:string;
  ServicioRuta!:string;
  Ubicacion!:string;
  Sentido!:string;
  Hora!:string;
  Marca!:string;
  Submarca!:string;
  Color!:string;
  Placas!:string;
  Anio!:string;
  RelatoEcho!:string;
  Lesionados!:string;
  Nombres!:string;
  Ambulancia!:string;
  SeguridaPublica!:string;
  PatrullaNumero!:string;
  OficialAcargo!:string;
  Seguro!:string;
  Supervisor!:string;
  usuario:string="Titan 1";


  constructor(private http:HttpClient,private sanitizer:DomSanitizer){}


  onFileChanged1(event:any){
    this.file = event.target.files[0];
  }
  onFileChanged2(event:any){
    this.file2 = event.target.files[0];
  }
  onFileChanged3(event:any){
    this.file3 = event.target.files[0];
  }

  convertToBase64(){ //este fucion lo convierte a base 64
    if (!this.file){
      const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () =>{
      this.base64String1 = reader.result as string;
      this.base64Image1 = reader.result as  string;
      return;
    }
    }
  }

  ngOnInit(): void {  
  }


  enviarInformeAccidente(){
    var imagenSend
    var imagenSend2
    var imagenSend3
    
    if (this.file,this.file2){
      const reader = new FileReader();
      const reader2 = new FileReader();
      const reader3 = new FileReader();

      reader.readAsDataURL(this.file);
      reader2.readAsDataURL(this.file2);
      reader3.readAsDataURL(this.file3);


      reader.onload=()=>{
        this.base64String1 = reader.result as string;
        this.base64Image1 = reader.result as  string;
        imagenSend=this.base64String1

        reader2.onload = () =>{
          this.base64String2 = reader2.result as string;
          this.base64Image2 = reader2.result as  string;
          imagenSend2=this.base64String2
          this.base64String1 = reader.result as string;
          this.base64String2 = reader2.result as string;

          reader3.onload = () =>{
            this.base64String3 = reader3.result as string;
            this.base64Image3 = reader3.result as  string;
            imagenSend=this.base64String1
            imagenSend3=this.base64String3
            imagenSend2=this.base64String2
            this.base64String1 = reader.result as string;
            this.base64String2 = reader2.result as string;
            this.base64String3 = reader3.result as string;
            console.log(imagenSend,imagenSend2,imagenSend3)

            const datos = {

              NoEconomico:this.VehiculoECO,
              ServicioRuta:this.ServicioRuta, 
              TipoUnidad:this.TipoUnidad,
              Ubicacion:this.Ubicacion,
              Sentido:this.Sentido,
              Hora:this.Hora,
              Marca:this.Marca,
              Submarca:this.Submarca,
              Color:this. Color,
              Placas:this.Placas,
              Anio:this.Anio,
              Conductor:this. Conductor,
              Credencial:this.Credencial,
              Descripcion:this.RelatoEcho,
              Lesionados:this.Lesionados,
              Nombres:this.Nombres,
              Ambulancia:this.Ambulancia,
              SeguridaPublica:this.SeguridaPublica,
              PatrullaNumero:this.PatrullaNumero,
              OficialAcargo:this.OficialAcargo,
              Seguro:this.Seguro,
              Supervisor:this.Supervisor,
              usuario:this.usuario,
              Foto_Eco:this.base64String1,
              Foto_Part:this.base64String2,
              Foto_Tarjeton:this.base64String3
            }
  
            console.log(datos)
        
            let url="api/Agregar_Informe_de_Accidente"
            this.http.post(url,datos).toPromise().then((data:any)=>{
              console.log(data)
              console.log(datos)
             
            })
          
          }



          }

    }

  };

    
  }


}

