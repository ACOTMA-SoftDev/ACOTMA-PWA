import { HttpClient } from "@angular/common/http";
import { Component, OnInit,ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  templateUrl: 'consultar.servicio.Component.html',
  styleUrls: ['consultar.servicio.Component.scss']
})
export class ConsultarServicioComponent implements OnInit {
  @ViewChild('myModal') myModal: any;
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
  cerrarModal(){
    location.reload()
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
      if(data){
        this.cerrarModal()
      }
    })

  }
  ngOnInit(): void {
    setInterval(() => {
    this.getAsignacion()
  }, 2000)
  setInterval(() => {
    this.getVerificados()
    console.log(this.dataVerificados)
  }, 2000)
  }
  goValidar(idAsignado: any) {
    console.log(idAsignado)
    this.router.navigate(['Verificadores/VerificarUnidad',idAsignado])
  }
  goReportar() {
    this.router.navigate(['Verificadores/ReportarUnidad'])
  }
  goCerrar() {
    this.router.navigate(['login'])
  }

}
