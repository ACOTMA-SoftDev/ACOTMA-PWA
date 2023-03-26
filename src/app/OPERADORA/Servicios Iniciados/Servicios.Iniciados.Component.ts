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
  filtro!:string
  constructor(private router:Router,private http:HttpClient){
  }
  filterItems(dato:any,filtro:string){
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  GetServiciosIniciados(){
    this.http.get("https://localhost:44397/api/ServiciosIniciados").
    subscribe(data=>{
      this.dataAsignacion=data
    })
  }
  ngOnInit(): void {
    setInterval(() => {
    this.GetServiciosIniciados()
  }, 500)
  }
  goApertura(){
    this.router.navigate(['Operadora/Agregar/Servicio'])
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
  goEditarServicio(idAsignacion:any){
    this.router.navigate(['Operadora/EditarServicio',idAsignacion])
  }



}
