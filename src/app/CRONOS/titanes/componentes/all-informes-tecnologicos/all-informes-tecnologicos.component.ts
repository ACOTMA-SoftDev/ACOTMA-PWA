import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import jsPDF  from 'jspdf';
import { style } from '@angular/animations';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


@Component({
  selector: 'app-all-informes-tecnologicos',
  templateUrl: './all-informes-tecnologicos.component.html',
  styleUrls: ['./all-informes-tecnologicos.component.css']
})
export class AllInformesTecnologicosComponent {
  term:any;//esta variabel sirve para filtrar los datos por fecha, nombre, ect
  fechahoy:Date=new Date()//y esta variable es ara que cuado se descargue el archivo lleve la fecha de hoy.

  exportAsConfig: ExportAsConfig = {//ceramos la funcion para exportar en excel
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


  

  InformeIncidenciasTec:any=[];//recolectamos todos los datos para luego mostrarlos
   //creamos un contrucutor
   title = 'Informeincidencias tecnologia';

   getAllEstacionesToday(){//funcion que manada a llamara a la api para mostrar todos los informes
    this.http.get('https://prueba252.somee.com/api/Informes_de_Todas_incidencias_tecnologicas').subscribe(data=>{
      console.log(data)
      this.InformeIncidenciasTec=data
    })
    }

  ngOnInit(): void {//muestra lso informes en la pagina
    setInterval(() => {
    this.getAllEstacionesToday();
  }, 1000)
  }

}
