// Importa los módulos Component y OnInit del módulo '@angular/core'
import { Component, OnInit } from "@angular/core";

// Importa el módulo Router del módulo '@angular/router'
import { Router } from '@angular/router'


// Define un nuevo componente con la anotación @Component
@Component({
  
  // Define la ruta del archivo HTML del componente
  templateUrl: 'login.Component.html',

  // Define la ruta del archivo SCSS del componente
  styleUrls: ['login.Component.scss']
})

// Define la clase loginComponent con la implementación de la interfaz OnInit
export class loginComponent implements OnInit {

  // Define dos propiedades con la ruta del archivo GIF asociado a cada una
  icongif = 'assets/iACOTMA.gif'
  iconfiPink = 'assets/iconPinkAcotma.gif'

  // Define dos propiedades para almacenar el nombre de usuario y la contraseña
  user: any
  pass: any

  // Constructor de la clase que recibe una instancia del módulo Router
  constructor(private router: Router) { }

  // Implementación del método ngOnInit de la interfaz OnInit
  ngOnInit(): void {

  }

  // Método que se ejecuta al presionar el botón de inicio de sesión
  loginbtn() {

    // Si el nombre de usuario es 'Titan 1', navega a la vista 'inicio_titanes'
    if (this.user === "Titan 1") {
      this.router.navigate(['inicio_titanes'])
    }

    // Si el nombre de usuario es 'Operadora', navega a la vista 'Operadora'
    if (this.user === "Operadora") {
      this.router.navigate(['Operadora'])
    }

    // Si el nombre de usuario es 'Cronos 1', navega a la vista 'inicio'
    if (this.user === "Cronos 1") {
      this.router.navigate(['inicio'])
    }

    // Si el nombre de usuario es 'Verificadores', navega a la vista 'Verificadores/ConsultaServicio'
    if (this.user === "Verificadores") {
      this.router.navigate(['Verificadores/ConsultaServicio'])
    }
  }
}
