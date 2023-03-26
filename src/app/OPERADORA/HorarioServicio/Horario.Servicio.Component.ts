import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
import { map } from "rxjs";


@Component({

  templateUrl: 'Horario.Servicio.Component.html',
  styleUrls: ['Horario.Servicio.Component.scss']
})
export class HorarioComponent implements OnInit {
  icongif = 'assets/iconBlackAcotma.gif'
  fechaInicial!: string
  fechaFinal!: string
  ruta!: string
  intervalo!: any
  corridaInicial: any
  corridaFinal: any
  horarioToday: any
  filtro !: string
  filtro2 !: string
  constructor(private router: Router, private http: HttpClient) {
  }
  filterItems(dato: any, filtro: string) {
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  filterItems2(dato: any, filtro2: string) {
    return dato.nombre.toLowerCase().indexOf(filtro2.toLowerCase()) !== -1;
  }
    //const terminosBusqueda = filtro.toLowerCase().split(' ');
    //return terminosBusqueda.every((term) =>
      //dato.ruta.toLowerCase().includes(term) ||
      //dato.fecha.toLowerCase().includes(term)
    //);
  //}
  sendHorarios() {
    const datosSen = {
      fechaInicial: this.fechaInicial,
      fechaFinal: this.fechaFinal,
      ruta: this.ruta,
      intervalo: this.intervalo,
      corridaInicial: this.corridaInicial,
      corridaFinal: this.corridaFinal,
    }
    console.log(datosSen)
  }
  getDateToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.fechaInicial = `${year}/${month}/${day}`;
  }
  getHorarioToday() {
    this.http.get<any>("https://localhost:44397/api/GetHorarios/Today/Id").
      subscribe(data => {
        this.horarioToday = data
      })
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getDateToday()
    }, 5000)
    setInterval(() => {
      this.getHorarioToday()
    }, 500)

  }
  goApertura() {
    this.router.navigate(['Operadora/Home'])
  }
  goServiciosIniciados() {
    this.router.navigate(['Operadora/ServiciosIniciados'])
  }
  goHorarioServicio() {
    this.router.navigate(['Operadora/HorarioServicio'])
  }
  goCerrar() {
    this.router.navigate(['login'])
  }
  goButtonEditarTable() {
    this.router.navigate(['Operadora/EditarHoraServicio'])
  }

}
