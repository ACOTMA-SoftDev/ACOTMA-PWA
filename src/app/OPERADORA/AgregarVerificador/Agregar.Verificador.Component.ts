// Importa el decorador 'Component' y la interfaz 'OnInit' del módulo '@angular/core'
import { Component, OnInit } from "@angular/core";

@Component({
  // La ruta al archivo de plantilla HTML que se asociará con este componente
  templateUrl: 'Agregar.Verificador.Component.html',
  // La ruta al archivo de estilos CSS que se asociará con este componente
  styleUrls: ['Agregar.Verificador.Component.scss']
})

export class AgregarVerificadores implements OnInit {
  // Declaración de dos propiedades de clase
  icongif = 'assets/iconBlackAcotma.gif';
  iconV = 'assets/iconVerificadores.gif';

  // Método que se ejecuta cuando se inicia el componente
  ngOnInit(): void {
    // No se ejecuta ninguna acción aquí, ya que este método está vacío
  }
}
