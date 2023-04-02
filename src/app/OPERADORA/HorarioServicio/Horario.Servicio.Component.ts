import { HttpClient } from "@angular/common/http";
import { Component, OnInit,ViewChild,ElementRef } from "@angular/core";
import { Router } from '@angular/router'


@Component({

  templateUrl: 'Horario.Servicio.Component.html',
  styleUrls: ['Horario.Servicio.Component.scss']
})
export class HorarioComponent implements OnInit {
  icongif = 'assets/iconBlackAcotma.gif'
  loading='assets/loading.gif'
  fechaInicio!: any
  fechaFinal!: any
  ruta!: any
  intervalo!: any
  corridaInicial: any
  corridaFinal: any
  primeraSalida:any
  horarioToday: any
  filtro !: any
  filtro2 !: any
  getFecha:any
  getRuta:any
  modal:any
  public mostrarImagen: boolean = false;
  constructor(private router: Router, private http: HttpClient) {
  }
  filterItems(dato: any, filtro: string) {
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }
  filterItems2(dato: any, filtro2: string) {
    return dato.nombre.toLowerCase().indexOf(filtro2.toLowerCase()) !== -1;
  }
  sendHorarios() {
    this.mostrarImagen = true;
    const datosSen = {
      fechaInicio: this.fechaInicio,
      fechaFinal: this.fechaFinal,
      ruta: this.ruta,
      intervalo: this.intervalo,
      corridaInicial: this.corridaInicial,
      corridaFinal: this.corridaFinal,
      primeraSalida:this.primeraSalida

    }
    let url="https://prueba252.somee.com/api/HorarioServicio"
    this.http.post(url,datosSen).toPromise().then(data=>{
      if(data===true){
        this.mostrarImagen =false;
      }
    })
  }

  getHorarioToday() {
    this.http.get<any>("https://prueba252.somee.com/api/GetHorarios/Today/Id").
      subscribe(data => {
        this.horarioToday = data
      })
  }
  btnDeleteHorario(sendFecha:any,sendRuta:any){
    this.getFecha=sendFecha
    this.getRuta=sendRuta
  }
  btnConfirmDeleteHorario(){
    const sendData={
      fechaDelete:this.getFecha,
      rutaDelete:this.getRuta
    }
    this.http.post("https://prueba252.somee.com/api/DeleteHorarioServicio",sendData).toPromise().then(response=>{
      console.log(response)
    })

  }

  ngOnInit(): void {
    setInterval(() => {
      this.getHorarioToday()
    }, 500)

  }
  goApertura() {
    this.router.navigate(['Operadora/Agregar/Servicio'])
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
