import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({

  templateUrl:'Verificar.Unidad.Component.html',
  styleUrls:['Verificar.Unidad.Component.scss']

})

export class VerificarUnidadesComponent implements OnInit{
  constructor(private router:Router){

  }
  unidad="102"
  icongif='assets/iconBlackAcotma.gif'
  
  ngOnInit(): void {

  }
  goLiberarUnidad(){
    this.router.navigate(['Verificadores/ConsultaServicio'])
  }
  goCerrar(){
    this.router.navigate(['login'])
  }

}


