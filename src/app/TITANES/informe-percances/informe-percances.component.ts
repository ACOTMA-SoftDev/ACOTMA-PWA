import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-informe-percances',
  templateUrl: './informe-percances.component.html',
  styleUrls: ['./informe-percances.component.css']
})
export class InformePercancesComponent implements OnInit{



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
  usuario:string=("Titan 1");


  constructor(private http:HttpClient,private sanitizer:DomSanitizer,private location: Location,){}


  ngOnInit(): void {  
  }


  enviarInformeAccidente(){

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
            }

      console.log(datos)
      let url="https://prueba252.somee.com/api/Agregar_Informe_de_Accidente"
      this.http.post(url,datos).toPromise().then((data:any)=>{
        console.log(data)
        location.reload();
      })
          
          

  

    
  }


}

