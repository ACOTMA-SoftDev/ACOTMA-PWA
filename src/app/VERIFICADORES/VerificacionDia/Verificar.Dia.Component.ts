import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({

  templateUrl:'Verificar.Dia.Component.html',
  styleUrls:['Verificar.Dia.Component.scss']
})

export class VerificarDia implements OnInit{
  icongif='assets/iconBlackAcotma.gif'
  constructor(private router:Router){

  }
    
  ngOnInit(): void {

  }
  goCerrar(){
    this.router.navigate(['login'])
  }

}
