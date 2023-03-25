import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'

@Component({

templateUrl:'Horario.Servicio.Component.html',
styleUrls:['Horario.Servicio.Component.scss']
})
export class HorarioComponent implements OnInit{
  icongif='assets/iconBlackAcotma.gif'
  currentDate!:string
  constructor(private router:Router){
    }
    getDateToday(){
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      this.currentDate = `${year}/${month}/${day}`;
    }

    ngOnInit(): void {
      this.getDateToday()
      console.log(this.currentDate)
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
