import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  templateUrl:'Reportar.Unidad.Component.html',
  styleUrls:['Reportar.Unidad.Component.scss']
})


export class ReportarUnidad implements OnInit{
  constructor(private router:Router){

  }
  icongif='assets/iconBlackAcotma.gif'
  ngOnInit(): void {
  }
  goValidarReporte(){
    this.router.navigate(['Verificadores/ConsultaServicio'])
  }
  goCerrar(){
    this.router.navigate(['login'])
  }


}
