import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  templateUrl: 'consultar.servicio.Component.html',
  styleUrls: ['consultar.servicio.Component.scss']
})
export class ConsultarServicioComponent implements OnInit {
  icongif = 'assets/iconBlackAcotma.gif'
  dataVerificacion: any
  dataHorario:any
  filtro!:string

  constructor(private router: Router, private http: HttpClient) {
  }
  filterItems(dato:any,filtro:string){
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  getAsignacion() {
    this.http.get("https://prueba252.somee.com/api/Verificacion/Servicio/Completo").subscribe(data => {
      this.dataVerificacion = data
    })
  }
  ngOnInit(): void {
    setInterval(() => {
    this.getAsignacion()
  }, 500)
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
