import { HttpClient } from '@angular/common/http'
import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'
@Component({
  templateUrl:'Servicios.Iniciados.Component.html',
  styleUrls:['Servicios.Iniciados.Component.scss']
})
export class ServiciosIniciadosComponent implements OnInit{
  icongif='assets/iconBlackAcotma.gif'
  dataAsignacion:any
  constructor(private router:Router,private http:HttpClient){
  }
  GetServiciosIniciados(){
    this.http.get("https://localhost:44397/api/ServiciosIniciados").
    subscribe(data=>{
      this.dataAsignacion=data
      console.log(this.dataAsignacion)
    })
  }
  ngOnInit(): void {
    this.GetServiciosIniciados()
  }
  goApertura(){
    this.router.navigate(['Operadora/Home'])
  }
  goServiciosIniciados(){
    this.router.navigate(['Operadora/ServiciosIniciados'])
  }
  goHorarioServicio(){
    this.router.navigate(['Operadora/HorarioServicio'])
  }
  goCerrar(){
    this.router.navigate(['login'])
  }
  goButtonEditarTable(){
    this.router.navigate(['Operadora/EditarServicio'])
  }



}
