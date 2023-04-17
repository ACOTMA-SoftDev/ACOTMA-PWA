// Importa los módulos 'Component' y 'OnInit' del paquete '@angular/core'
import { Component, OnInit } from "@angular/core";

// Importa el módulo 'Router' del paquete '@angular/router'
import { Router } from '@angular/router'
@Component({
  // La ruta al archivo de plantilla HTML que se asociará con este componente
  templateUrl: 'Editar.Hora.Component.html',
  // La ruta al archivo de estilos CSS que se asociará con este componente
  styleUrls: ['Editar.Hora.Component.scss']
})

export class EditarHoraComponent implements OnInit {
  // Propiedad de clase que contiene la ruta a un archivo de imagen
  icongif = 'assets/iconBlackAcotma.gif';

  // Constructor de clase que toma un objeto 'Router' de Angular
  constructor(private router: Router) {
    // No se ejecuta ninguna acción aquí, ya que este constructor está vacío
  }

  // Método que se ejecuta cuando se inicia el componente
  ngOnInit(): void {
    // No se ejecuta ninguna acción aquí, ya que este método está vacío
  }

  // Método que se ejecuta cuando se hace clic en un botón para ir a la página 'Operadora/Home'
  goApertura() {
    this.router.navigate(['Operadora/Home']);
  }

  // Método que se ejecuta cuando se hace clic en un botón para ir a la página 'Operadora/ServiciosIniciados'
  goServiciosIniciados() {
    this.router.navigate(['Operadora/ServiciosIniciados']);
  }

  // Método que se ejecuta cuando se hace clic en un botón para ir a la página 'Operadora/HorarioServicio'
  goHorarioServicio() {
    this.router.navigate(['Operadora/HorarioServicio']);
  }

  // Método que se ejecuta cuando se hace clic en un botón para ir a la página 'login'
  goCerrar() {
    this.router.navigate(['login']);
  }
}

