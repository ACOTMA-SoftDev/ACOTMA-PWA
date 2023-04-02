import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro-radios',
  templateUrl: './registro-radios.component.html',
  styleUrls: ['./registro-radios.component.css']
})
export class RegistroRadiosComponent implements OnInit{

  //creamos un contrucutor
  asignaciones:any;//recolectamos todos los datos para luego mostrarlos
  term:any;
  Id_asignacionRadio:any;

	constructor(private router: Router, private http: HttpClient,private location:Location) {}
   //creamos un contrucutor
   title = 'Registro de usuarios';


  GetAsignacionRadios(){
    this.http.get('https://prueba252.somee.com/api/ver_Registro_de_Asignacion_de_Radios').subscribe(data=>{
       console.log(data)
       this.asignaciones=data
     })
   }
 
   ngOnInit(): void {
     setInterval(() => {
     this.GetAsignacionRadios();
   }, 500)
   };


   cerrarModal(){
    location.reload()
  }

   btnCancelarAsignacion(Id_asignacionRadiobtn:any){
    this.Id_asignacionRadio=Id_asignacionRadiobtn
    console.log(this.Id_asignacionRadio)
  }
   btnAccept(){
    const datos={
      Id_asignacionRadio:this.Id_asignacionRadio
    }
    let url="https://prueba252.somee.com/api/eliminar_Asignacion_de_Radios"
    this.http.post(url,datos).toPromise().then(data=>{
      if(data){
        console.log(data)
        this.cerrarModal()
      }
    })

  }


  
}
