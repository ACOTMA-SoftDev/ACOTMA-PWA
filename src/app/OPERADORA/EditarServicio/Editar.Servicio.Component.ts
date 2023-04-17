// Importa el módulo HttpClient desde "@angular/common/http"
import { HttpClient } from "@angular/common/http";

// Importa los módulos Component y OnInit desde "@angular/core"
import { Component, OnInit } from "@angular/core";

// Importa los módulos Router y ActivatedRoute desde "@angular/router"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'Editar.Servicio.Component.html', // Ruta de la plantilla HTML asociada a este componente
  styleUrls: ['Editar.Servicio.Component.scss'] // Ruta del archivo de estilos asociado a este componente
})

// Define la clase EditarServicioComponent e implementa la interfaz OnInit
export class EditarServicioComponent implements OnInit {

  // Declara una propiedad icongif con el valor de la ruta del archivo de imagen 'assets/iconBlackAcotma.gif'
  icongif = 'assets/iconBlackAcotma.gif'

  // Declara una propiedad idAsignacion sin inicializar
  idAsignacion: any

  // Declara una propiedad dataServiciosIniciados sin inicializar
  dataServiciosIniciados: any

  // Define el constructor del componente y solicita las dependencias de Router, ActivatedRoute y HttpClient
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  // Implementa el método ngOnInit que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {

    // Obtiene el valor del parámetro 'idAsignacion' de la ruta actual utilizando el método snapshot del ActivatedRoute
    this.idAsignacion = this.route.snapshot.params['idAsignacion']

    // Define la URL para obtener los datos de los servicios iniciados correspondientes al idAsignacion
    let url = `https://prueba252.somee.com/api/ServiciosIniciadosById?idAsignacion=${this.idAsignacion}`

    // Realiza una solicitud HTTP GET a la URL definida y suscribe el componente al observable para recibir los datos
    this.http.get<any>(url).subscribe(data => {
      this.dataServiciosIniciados = data
    })
  }

        // Define el método goApertura que redirige al usuario a la ruta 'Operadora/Home'
goApertura() {
  this.router.navigate(['Operadora/Home'])
}

// Define el método goServiciosIniciados que redirige al usuario a la ruta 'Operadora/ServiciosIniciados'
goServiciosIniciados() {
  this.router.navigate(['Operadora/ServiciosIniciados'])
}

// Define el método goHorarioServicio que redirige al usuario a la ruta 'Operadora/HorarioServicio'
goHorarioServicio() {
  this.router.navigate(['Operadora/HorarioServicio'])
}

// Define el método goCerrar que redirige al usuario a la ruta 'login'
goCerrar() {
  this.router.navigate(['login'])
}
}


