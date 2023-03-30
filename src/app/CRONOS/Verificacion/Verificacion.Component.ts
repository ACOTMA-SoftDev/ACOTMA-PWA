import { Component, OnInit,ViewChild } from "@angular/core";
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { HttpClient } from "@angular/common/http";
import * as Chart from "chart.js";
import { Router } from "@angular/router";

@Component({
  templateUrl:'Verificacion.Component.html',
  styleUrls: ['Verificacion.Component.scss']

})
export class VerificacionComponent implements OnInit{
  icongif='assets/iconBlackAcotma.gif'
  dataAsignacion:any
  filtro!:string
  constructor(private router:Router,private http:HttpClient){
  }
  filterItems(dato:any,filtro:string){
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  GetServiciosIniciados(){
    this.http.get("http://PruebaAcotma2.somee.com/api/CentroControl/Verificacion/Liberado").
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
