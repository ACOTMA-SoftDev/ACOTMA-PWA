import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import jsPDF  from 'jspdf';
import { style } from '@angular/animations';

@Component({
  selector: 'app-all-informes-tecnologicos',
  templateUrl: './all-informes-tecnologicos.component.html',
  styleUrls: ['./all-informes-tecnologicos.component.css']
})
export class AllInformesTecnologicosComponent {

  
  term:any;
  InformeIncidenciasTec:any=[];//recolectamos todos los datos para luego mostrarlos

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Informeincidencias tecnologia';

   getAllEstacionesToday(){
    this.http.get('https://prueba252.somee.com/api/Informes_de_Todas_incidencias_tecnologicas').subscribe(data=>{
      console.log(data)
      this.InformeIncidenciasTec=data
    })
    }

  ngOnInit(): void {
    setInterval(() => {
    this.getAllEstacionesToday();
  }, 1000)
  }

}
