import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
interface data{
  corrida:any
}
@Component({
  templateUrl: 'Verificar.Unidad.Component.html',
  styleUrls: ['Verificar.Unidad.Component.scss']
})

export class VerificarUnidadesComponent implements OnInit {
  InitData!:data
  lista:any;
  isDisable = false
  Observaciones: any
  idAsigancion: any
  dataAsignacion: any
  icongif = 'assets/iconBlackAcotma.gif'
  horaLlegada:any
  ciclosPerdidos:any
  corridas:any
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit(): void {
    this.toggleDisabled()
    this.idAsigancion = this.route.snapshot.params['idAsignacion'];
    let url = `https://prueba252.somee.com/api/Verificacion/Servicio?idAsignacion=${this.idAsigancion}`;
    this.http.get(url).pipe(
      map((respuesta: any) => {
        console.log(respuesta)
        this.dataAsignacion = respuesta
      })
    ).subscribe();
  }
  goLiberarUnidad(corrida:any,fecha:any,fkAsignacion:any) {
    const fechas = new Date()
    const hora = fechas.getHours()
    const minutes = fechas.getMinutes()
    this.horaLlegada = `${hora}:${minutes}`
    const datosSen = {
      corrida:corrida,
      fecha:fecha,
      horaLlegada:this.horaLlegada
    }
    const Verificadores={
      estado:"Verificado",
      observaciones:this.Observaciones,
      horaSalida:this.horaLlegada,
      fkAsignacion:fkAsignacion,
      ciclosPerdidos:this.ciclosPerdidos
    }
    if(this.isDisable===true){
      console.log('true')
    let url = "https://prueba252.somee.com/api/Liberar/Unidades"
    this.http.post(url, datosSen).toPromise().then(Response => {
      if (Response === true) {
        this.router.navigate(['Verificadores/ConsultaServicio'])
      }
    })
    let urlV="https://prueba252.somee.com/api/addverificacion"
    this.http.post(urlV,Verificadores).toPromise().then(Response2 => {
      if (Response2 === true) {
        console.log("checale  ")
      }
    })
  }
  else{

    let url="https://localhost:44397/api/Update/Verificacion"
    this.http.post(url,this.dataAsignacion[0]  ).toPromise().then(response=>{
      console.log(response);
    })
  }
  }
  goReportarUnidad(corrida:any,fecha:any,fkAsignacion:any) {
    const fechas = new Date()
    const hora = fechas.getHours()
    const minutes = fechas.getMinutes()
    this.horaLlegada = `${hora}:${minutes}`
    const datosSen = {
      corrida:corrida,
      fecha:fecha,
      horaLlegada:this.horaLlegada
    }
    let url = "https://prueba252.somee.com/api/Liberar/Unidades"
    this.http.post(url, datosSen).toPromise().then(Response => {
      if (Response === true) {
        this.router.navigate(['Verificadores/ConsultaServicio'])
      }
    })
    const Verificadores={
      estado:"Verificado",
      observaciones:this.Observaciones,
      horaSalida:this.horaLlegada,
      fkAsignacion:fkAsignacion,
      ciclosPerdidos:this.ciclosPerdidos
    }
    let urlV="https://prueba252.somee.com/api/addverificacion"
    this.http.post(urlV,Verificadores).toPromise().then(Response2 => {
      if (Response2 === true) {
        console.log("checale  ")
      }
    })
  }
  toggleDisabled() {
    const editBlock = document.getElementById('editBlock')
    this.isDisable = !this.isDisable

    if (this.isDisable == true) {
      editBlock!.textContent = 'Editar'
    }
    else {
      editBlock!.textContent = 'Bloquear'
    }
  }
  goCerrar() {
    this.router.navigate(['login'])
  }

}


