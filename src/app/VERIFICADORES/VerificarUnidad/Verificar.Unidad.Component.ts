// Importa la clase HttpClient desde el módulo @angular/common/http.
import { HttpClient } from "@angular/common/http";
// Importa la clase Component y OnInit desde el módulo @angular/core.
import { Component, OnInit } from "@angular/core";
// Importa las clases Router y ActivatedRoute desde el módulo @angular/router.
import { Router, ActivatedRoute } from "@angular/router";
// Importa la función map desde el módulo rxjs.
import { map } from "rxjs";
interface data{
  corrida:any
}
// Decorador Component que define los metadatos para el componente.
@Component({
  // La plantilla HTML asociada a este componente.
  templateUrl: 'Verificar.Unidad.Component.html',
  // La ruta al archivo de estilo CSS asociado a este componente.
  styleUrls: ['Verificar.Unidad.Component.scss']
})

// Declara una clase llamada VerificarUnidadesComponent que implementa la interfaz OnInit.
export class VerificarUnidadesComponent implements OnInit {
  // Declara una propiedad llamada InitData con el tipo de datos data. El valor inicial es undefined.
  InitData!: data;
  // Declara una propiedad llamada lista sin tipo de datos específico.
  lista: any;
  // Declara una propiedad booleana llamada isDisable y le asigna el valor false.
  isDisable = false;
  // Declara una propiedad llamada Observaciones sin tipo de datos específico.
  Observaciones: any;
  // Declara una propiedad llamada idAsigancion sin tipo de datos específico.
  idAsigancion: any;
  // Declara una propiedad llamada dataAsignacion sin tipo de datos específico.
  dataAsignacion: any;
  // Declara una propiedad llamada icongif y le asigna el valor 'assets/iconBlackAcotma.gif'.
  icongif = 'assets/iconBlackAcotma.gif';
  // Declara una propiedad llamada horaLlegada sin tipo de datos específico.
  horaLlegada: any;
  // Declara una propiedad llamada ciclosPerdidos sin tipo de datos específico.
  ciclosPerdidos: any;
  // Declara una propiedad llamada corridas sin tipo de datos específico.
  corridas: any;

  // Constructor que inyecta las dependencias Router, ActivatedRoute y HttpClient.
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }
  
  // Implementa el método ngOnInit() de la interfaz OnInit.
ngOnInit(): void {
  // Llama al método toggleDisabled().
  this.toggleDisabled();
  // Obtiene el valor del parámetro 'idAsignacion' de la ruta actual.
  this.idAsigancion = this.route.snapshot.params['idAsignacion'];
  // Construye la URL de la API para obtener la información del servicio.
  let url = `https://prueba252.somee.com/api/Verificacion/Servicio?idAsignacion=${this.idAsigancion}`;
  // Realiza una solicitud GET a la API y procesa la respuesta utilizando la función map().
  this.http.get(url).pipe(
    map((respuesta: any) => {
      // Muestra la respuesta en la consola para depuración.
      console.log(respuesta);
      // Asigna la respuesta a la propiedad dataAsignacion del componente.
      this.dataAsignacion = respuesta;
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
    let url = "https://prueba252.somee.com/api/Liberar/Unidades"
    this.http.post(url, datosSen).toPromise().then(Response => {
      if (Response === true) {
        this.router.navigate(['Verificadores/ConsultaServicio'])
      }
    })
    let urlV="https://prueba252.somee.com/api/addverificacion"
    this.http.post(urlV,Verificadores).toPromise().then(Response2 => {
      if (Response2 === true) {
      }
    })
  }
  else{

    let url="https://prueba252.somee.com/api/Update/Verificacion"
    this.http.post(url,this.dataAsignacion[0]  ).toPromise().then(response=>{
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
