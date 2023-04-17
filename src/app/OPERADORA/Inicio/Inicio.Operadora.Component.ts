// Importa el decorador Component y la interfaz OnInit desde el módulo @angular/core
import { Component, OnInit } from "@angular/core";

// El decorador Component permite definir un componente en Angular, proporcionando metadatos sobre su estructura y comportamiento
// El nombre del componente se define en el selector, que se utiliza para insertar el componente en una plantilla HTML
@Component({
  templateUrl: 'Inicio.Operadora.Component.html', // Define la ubicación de la plantilla HTML asociada con el componente
  styleUrls: ['Inicio.Operadora.Component.scss'] // Define la ubicación de una o más hojas de estilo CSS asociadas con el componente
})

// La clase InicioOperadoraComponent implementa la interfaz OnInit para indicar que tiene un método ngOnInit que se ejecuta cuando se inicializa el componente
export class InicioOperadoraComponent implements OnInit {

  // El método ngOnInit se ejecuta cuando se inicializa el componente
  ngOnInit(): void {

  }
}