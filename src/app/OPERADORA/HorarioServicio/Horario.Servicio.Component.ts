// Importar HttpClient para realizar solicitudes HTTP
import { HttpClient } from "@angular/common/http";
// Importar Component y OnInit para crear componentes Angular y manejar el ciclo de vida del componente
import { Component, OnInit,ViewChild,ElementRef } from "@angular/core";
// Importar Router para navegar entre páginas de la aplicación Angular
import { Router } from '@angular/router';
/**
 * Componente para mostrar los horarios de los servicios.
 */
@Component({
  // URL de la plantilla HTML para el componente
  templateUrl: 'Horario.Servicio.Component.html',
  // URL de la hoja de estilo CSS para el componente
  styleUrls: ['Horario.Servicio.Component.scss']
})
/**
 * Componente para mostrar el horario de los servicios.
 */
export class HorarioComponent implements OnInit {
  // Variables para las imágenes
  icongif = 'assets/iconBlackAcotma.gif'
  loading='assets/loading.gif'
  // Variables para las fechas
  fechaInicio!: any
  fechaFinal!: any
  // Variables para la ruta
  ruta!: any
  // Variables para el intervalo
  intervalo!: any
  // Variables para la corrida
  corridaInicial: any
  corridaFinal: any
  // Variables para la primera salida
  primeraSalida:any
  // Variables para el horario de hoy
  horarioToday: any
  // Variables para los filtros
  filtro !: any
  filtro2 !: any
  // Variables para obtener la fecha y la ruta
  getFecha:any
  getRuta:any
  // Variable para el modal
  modal:any
  // Variable para mostrar la imagen
  public mostrarImagen: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  /**
   * Función para filtrar los elementos de una lista según el filtro ingresado.
   * @param dato La lista de elementos a filtrar.
   * @param filtro El filtro a aplicar.
   * @returns true si el elemento coincide con el filtro, false en caso contrario.
   */
  filterItems(dato: any, filtro: string) {
    return dato.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1;
  }

  /**
   * Función para filtrar los elementos de una lista según el segundo filtro ingresado.
   * @param dato La lista de elementos a filtrar.
   * @param filtro2 El segundo filtro a aplicar.
   * @returns true si el elemento coincide con el segundo filtro, false en caso contrario.
   */
  filterItems2(dato: any, filtro2: string) {
    return dato.nombre.toLowerCase().indexOf(filtro2.toLowerCase()) !== -1;
  }

  /**
   * Función para enviar los horarios a través de una solicitud POST.
   */
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

  /**
   * Función para obtener el horario de hoy a través de una solicitud GET.
   */
  getHorarioToday() {
    this.http.get<any>("https://prueba252.somee.com/api/GetHorarios/Today/Id").
      subscribe(data => {
        this.horarioToday = data
      })
  }

  /**
   * Función para establecer la fecha y la ruta seleccionadas al presionar el botón Eliminar Horario.
   * @param sendFecha La fecha seleccionada.
   * @param sendRuta La ruta seleccionada.
   */
  btnDeleteHorario(sendFecha:any,sendRuta:any){
    this.getFecha=sendFecha
    this.getRuta=sendRuta
  }

  btnConfirmDeleteHorario(){
    this.mostrarImagen = true;
    const sendData={
      fechaDelete:this.getFecha,
      rutaDelete:this.getRuta
    }
    this.http.post("https://prueba252.somee.com/api/DeleteHorarioServicio",sendData).toPromise().then(response=>{
      if(response){
        this.mostrarImagen = false;
      }
    })

  }
  btnConfirmarDeleteHorarios(){
    this.mostrarImagen = true;
    this.http.get("https://prueba252.somee.com/api/Delete/Horario").subscribe(data=>{
      if(data){
        this.mostrarImagen = false
      }
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
