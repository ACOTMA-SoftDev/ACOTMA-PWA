// Importa los decoradores Component y OnInit desde el módulo "@angular/core"
import { Component, OnInit } from "@angular/core";

// Importa todo el módulo XLSX de la librería 'xlsx'
import * as XLSX from 'xlsx';

// Importa la clase Router desde el módulo "@angular/router"
import { Router } from "@angular/router";

// Importa la clase HttpClient desde el módulo "@angular/common/http"
import { HttpClient } from "@angular/common/http";

  // El decorador @Component define la metadata del componente
@Component({
  // La propiedad templateUrl define la ruta al archivo HTML del componente
  templateUrl: 'Agregar.Servicio.Component.html',
  // La propiedad styleUrls define la ruta al archivo CSS del componente
  styleUrls: ['Agregar.Servicio.Component.scss']
})

export class AgregarSerevicioComponent implements OnInit {
  
  // Declarar variables
  public mostrarImagen: boolean = false; // Variable para mostrar o esconder la imagen de carga
  loading = 'assets/loading.gif' // Ruta de la imagen de carga
  icongif = 'assets/iconBlackAcotma.gif' // Ruta de la imagen del ícono
  ExcelData: any; // Variable para almacenar los datos del archivo de Excel
  respuesta: any // Variable para almacenar la respuesta del servidor
  estado: any = [] // Variable para almacenar el estado de la asignación
  estadodiv: any // Variable para almacenar el estado de la asignación en formato de cadena
  
  // Constructor de la clase
  constructor(private router: Router, private http: HttpClient) {
  }
  
  // Función para subir el archivo de Excel
  fileUpload(event: any) {
    const selectedFile = event.target.files[0]; // Obtener el archivo seleccionado
    const fileReader = new FileReader(); // Crear un objeto FileReader
    fileReader.readAsBinaryString(selectedFile); // Leer el archivo como una cadena binaria
    fileReader.onload = (event: any) => {
      var workbook = XLSX.read(fileReader.result, { type: 'binary' }) // Leer el archivo de Excel con la librería XLSX
      var sheetNames = workbook.SheetNames; // Obtener los nombres de las hojas del libro
      this.ExcelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]) // Convertir la hoja seleccionada en un objeto JSON
      console.log(this.ExcelData); // Mostrar el objeto JSON en la consola
    }
  }
  
  // Función para enviar la asignación al servidor
  sendAsignacion() {
    this.mostrarImagen = true; // Mostrar la imagen de carga
    this.http.post("https://prueba252.somee.com/api/Agregar/Servicio", this.ExcelData). // Enviar la asignación al servidor
      toPromise().then((response: any) => { // Convertir la respuesta en una promesa y manejarla con then
        if (response) {
          this.mostrarImagen = false // Esconder la imagen de carga si hay respuesta
        }
        this.respuesta = response // Almacenar la respuesta en la variable respuesta
      })
  }
  
  // Función para obtener el estado de la asignación
  obtenerAsignacion() {
    this.http.get<any[]>("https://prueba252.somee.com/api/consultarAsignacionDay"). // Obtener el estado de la asignación desde el servidor
      subscribe(data => { // Manejar la respuesta con subscribe
        this.estado = data // Almacenar el estado en la variable estado
        if (Array.isArray(this.estado) && this.estado.length === 0) { // Verificar si el estado está vacío
        }
        else {
          this.estadodiv = "hey" // Almacenar el estado en formato de cadena
        }
      })
  }
   // Función que se ejecuta al inicializar el componente
  
    ngOnInit(): void {
      this.obtenerAsignacion()
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
  }
