import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
templateUrl:'consultar.servicio.Component.html',
styleUrls:['consultar.servicio.Component.scss']
})
export class ConsultarServicioComponent implements OnInit{
    constructor(private router:Router){

    }
    icongif='assets/iconBlackAcotma.gif'
    ngOnInit(): void {

    }
    goValidar(){
        this.router.navigate(['Verificadores/VerificarUnidad'])
    }
    goReportar(){
        this.router.navigate(['Verificadores/ReportarUnidad'])
    }
    goCerrar(){
        this.router.navigate(['login'])
      }

}
