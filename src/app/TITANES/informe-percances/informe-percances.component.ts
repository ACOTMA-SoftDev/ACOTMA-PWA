import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component } from '@angular/core';
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
export class InformePercancesComponent {

  VehiculoECO!:String;
  TipoUnidad!:string;
  Tarjeton!:String;
  Conductor!:string;
  ServicioRuta!:string;
  Ubicacion!:string;
  Marca!:string;
  Modelo!:string;
  Color!:string;
  Placas!:string;
  RelatoEcho!:string;
  usuario:string="Titan 1";
  Foto_Eco!:File; 
  Foto_Par!:File;
  Foto_Tarjeton!:File;


  constructor(private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){}

  enviarInformeAccidente(){
    const datos = {

      NoEconomico:this.VehiculoECO,
      ServicioRuta:this.ServicioRuta, 
      TipoUnidad:this.TipoUnidad,
      Marca:this.Marca,
      Modelo:this.Modelo,
      Color:this. Color,
      Placas:this.Placas,
      Conductor:this. Conductor,
      Tarjeton:this.Tarjeton,
      Descripcion:this.RelatoEcho,
      Ubicacion:this.Ubicacion,
      usuario:this.usuario
    }
    let url="api/Agregar_Informe_de_Accidente"
    this.http.post(url,datos).toPromise().then((data:any)=>{
      console.log(data)
      location.reload();
    })
    
  }


}
