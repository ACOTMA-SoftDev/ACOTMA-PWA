// Importamos HttpClient desde el paquete "@angular/common/http"
import { HttpClient } from "@angular/common/http";

// Importamos Component y OnInit desde el paquete "@angular/core"
import { Component, OnInit } from "@angular/core";

// Importamos Router desde el paquete "@angular/router"
import { Router } from "@angular/router";

// Importamos Location desde el paquete "@angular/common"
import { Location } from '@angular/common';

@Component({
  // La plantilla HTML que se usará para renderizar este componente
  templateUrl: 'consultar.servicio.Component.html',

  // Los estilos CSS que se aplicarán a la plantilla HTML
  styleUrls: ['consultar.servicio.Component.scss']
})
export class ConsultarServicioComponent implements OnInit {
  icongif = 'assets/iconBlackAcotma.gif'
  dataVerificacion: any
  dataVerificados:any
  dataHorario:any
  filtro!:string
  filtros:any
  corrida:any
  idAsignacion:any


  constructor(private router: Router, private http: HttpClient,private location:Location) {
  }
  filterItems(dato:any,filtro:string){
    return dato.economico.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  getAsignacion() {
    this.http.get("https://prueba252.somee.com/api/Verificacion/Servicio/Completo").subscribe(data => {
      this.dataVerificacion = data
    })
  }
  getVerificados(){
    this.http.get("https://prueba252.somee.com/api/CentroControl/Verificacion/Liberado").subscribe(data=>{
      this.dataVerificados=data;
    })

  }


  btnCancelarVerificacion(corridabtn:any,idAsignacionbtn:any){
    this.corrida=corridabtn
    this.idAsignacion=idAsignacionbtn
  }
  btnAccept(){
    const datos={
      corrida:this.corrida,
      idAsignacion:this.idAsignacion
    }
    let url="https://prueba252.somee.com/api/EliminarVerificacion"
    this.http.post(url,datos).toPromise().then(data=>{
    })

  }
  ngOnInit(): void {
    setInterval(() => {
    this.getAsignacion()
  }, 2000)
  setInterval(() => {
    this.getVerificados()
  }, 2000)
  }
  goValidar(idAsignado: any) {
    this.router.navigate(['Verificadores/VerificarUnidad',idAsignado])
  }
  goReportar() {
    this.router.navigate(['Verificadores/ReportarUnidad'])
  }
  goCerrar() {
    this.router.navigate(['login'])
  }

}
