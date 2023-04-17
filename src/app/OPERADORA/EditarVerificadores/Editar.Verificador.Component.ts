// Importa los módulos 'Component' y 'OnInit' del paquete '@angular/core'
import { Component, OnInit } from "@angular/core";

@Component({
  // Especifica la plantilla HTML para el componente
  templateUrl: 'Editar.Verificador.Component.html',
  // Especifica los archivos de estilo para el componente
  styleUrls: ['Editar.Verificador.Component.scss']
})

export class EditarVerificadorComponent implements OnInit{
  ngOnInit(): void {
    // Este método se ejecuta cuando el componente se inicia.
    // Puedes poner aquí cualquier código de inicialización que necesites.
  }
}

