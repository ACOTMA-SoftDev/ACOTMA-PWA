import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from '@angular/router'
@Component({

templateUrl:'Editar.Servicio.Component.html',
styleUrls:['Editar.Servicio.Component.scss']
})
export class EditarServicioComponent implements OnInit{
  icongif='assets/iconBlackAcotma.gif'
  idAsignacion:any
  dataServiciosIniciados:any
    constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient){
    }

    ngOnInit(): void {
      this.idAsignacion=this.route.snapshot.params['idAsignacion']
      let url=`https://prueba252.somee.com/api/ServiciosIniciadosById?idAsignacion=${this.idAsignacion}`
      this.http.get<any>(url).subscribe(data=>{
        this.dataServiciosIniciados=data
      })
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

    }

