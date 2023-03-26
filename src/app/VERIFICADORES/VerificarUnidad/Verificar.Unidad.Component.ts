import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
@Component({
  templateUrl: 'Verificar.Unidad.Component.html',
  styleUrls: ['Verificar.Unidad.Component.scss']
})

export class VerificarUnidadesComponent implements OnInit {
  isDisable=false
  Estado="Verificacion"
  Observaciones:any
  horaLlegada:any
  idAsigancion: any
  dataAsignacion:any
  icongif = 'assets/iconBlackAcotma.gif'
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit(): void {
    this.toggleDisabled()
    this.idAsigancion = this.route.snapshot.params['idAsignacion'];
    console.log(this.idAsigancion)
    let url = `https://localhost:44397/api/Verificacion/Servicio?idAsignacion=${this.idAsigancion}`;
    this.http.get(url).pipe(
      map((respuesta: any) => {
        this.dataAsignacion=respuesta
      })
    ).subscribe();
  }
  goLiberarUnidad(corrida:any,fecha:any) {
    const fechas=new Date()
    const hora=fechas.getHours()
    const minutes=fechas.getMinutes()
    this.horaLlegada=`${hora}:${minutes}`
    const datos={
      corrida,
      fecha
    }
    console.log(datos)
    //this.router.navigate(['Verificadores/ConsultaServicio'])
  }
  toggleDisabled(){
    const editBlock=document.getElementById('editBlock')
    this.isDisable=!this.isDisable

    if(this.isDisable==true){
      editBlock!.textContent='Editar'
    }
    else{
      editBlock!.textContent='Bloquear'
    }
  }
  goCerrar() {
    this.router.navigate(['login'])
  }

}


