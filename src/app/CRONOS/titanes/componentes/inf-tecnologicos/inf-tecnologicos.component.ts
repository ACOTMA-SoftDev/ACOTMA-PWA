import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-inf-tecnologicos',
  templateUrl: './inf-tecnologicos.component.html',
  styleUrls: ['./inf-tecnologicos.component.css']
})

export class InfTecnologicosComponent implements OnInit{
  fechahoy:Date=new Date()

  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // Tipo de archivo a exportar (en este caso, Excel)
    elementIdOrContent: 'tableToExport',// ID de la tabla a exportar
  };

	constructor(private http:HttpClient,private exportAsService: ExportAsService) {}

  exportTable() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'incidencias tecnologicas').subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    //this.exportAsService.get(this.config).subscribe(content => {
      //console.log(content);
  //  });
  }

  //exportTable() {
    //this.exportAsService.save(this.exportAsConfig, 'REPORTE-DE-INCIDENCIA'); // Nombre que se le dará al archivo
  //}


  term:any;
  InformeIncidenciasTec:any=[];//recolectamos todos los datos para luego mostrarlos

   //creamos un contrucutor
   title = 'Informeincidencias tecnologia';

   getAllEstacionesToday(){
    this.http.get('https://prueba252.somee.com/api/Informe_de_incidencias_tecnologicas_de_hoy').subscribe(data=>{
      console.log(data)
      this.InformeIncidenciasTec=data
    })
    }

  ngOnInit(): void {
    setInterval(() => {
    this.getAllEstacionesToday();
  }, 500)
  }
}