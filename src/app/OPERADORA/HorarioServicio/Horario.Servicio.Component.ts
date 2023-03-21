import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
@Component({
    
templateUrl:'Horario.Servicio.Component.html',
styleUrls:['Horario.Servicio.Component.scss']
})
export class HorarioComponent implements OnInit{
    constructor(private router:Router){

    }
    icongif='assets/iconBlackAcotma.gif'
    ngOnInit(): void {

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
        this.router.navigate(['Operadora/EditarHoraServicio'])
      }

}