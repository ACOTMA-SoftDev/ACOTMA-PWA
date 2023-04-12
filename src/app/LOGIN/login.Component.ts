import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'

@Component({
templateUrl:'login.Component.html',
styleUrls:['login.Component.scss']
})
export class loginComponent implements OnInit{
    icongif='assets/iACOTMA.gif'
    iconfiPink='assets/iconPinkAcotma.gif'
    user:any
    pass:any
    constructor(private router:Router){

    }
    ngOnInit(): void {

    }
    loginbtn(){
      if(this.user==="Titan 1"){
        this.router.navigate(['inicio_titanes'])
      }
      if(this.user==="Operadora"){
        this.router.navigate(['Operadora'])
      }
      if(this.user==="Cronos 1"){
        this.router.navigate(['inicio'])
      }
      if(this.user==="Verificadores"){
        this.router.navigate(['Verificadores/ConsultaServicio'])
      }
    }

}