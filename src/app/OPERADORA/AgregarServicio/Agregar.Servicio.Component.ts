import { Component, OnInit } from "@angular/core";
  import * as XLSX from 'xlsx'
  import { Router } from "@angular/router";
  import { HttpClient } from "@angular/common/http";
  @Component({
    templateUrl: 'Agregar.Servicio.Component.html',
    styleUrls: ['Agregar.Servicio.Component.scss']
  })
  export class AgregarSerevicioComponent implements OnInit {
    public mostrarImagen: boolean = false;
    loading = 'assets/loading.gif'
    icongif = 'assets/iconBlackAcotma.gif'
    ExcelData: any;
    respuesta: any
    estado: any = []
    estadodiv: any
    constructor(private router: Router, private http: HttpClient) {
    }
    fileUpload(event: any) {
      const selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);
      fileReader.onload = (event: any) => {
        var workbook = XLSX.read(fileReader.result, { type: 'binary' })
        var sheetNames = workbook.SheetNames;
        this.ExcelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]])
        console.log(this.ExcelData);
      }
    }
    sendAsignacion() {
      this.mostrarImagen = true;
      this.http.post("https://prueba252.somee.com/api/Agregar/Servicio", this.ExcelData).
        toPromise().then((response: any) => {
          if (response) {
            this.mostrarImagen = false
          }
          this.respuesta = response

        })
    }
    obtenerAsignacion() {
      this.http.get<any[]>("https://prueba252.somee.com/api/consultarAsignacionDay").
        subscribe(data => {
          this.estado = data
          if (Array.isArray(this.estado) && this.estado.length === 0) {
          }
          else {
            this.estadodiv = "hey"
          }
        })
    }
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
