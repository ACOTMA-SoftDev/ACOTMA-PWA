import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';



@Component({
  selector: 'app-inf-tecnologicos',
  templateUrl: './inf-tecnologicos.component.html',
  styleUrls: ['./inf-tecnologicos.component.css']
})
export class InfTecnologicosComponent implements OnInit{

  
	constructor(private http:HttpClient) {}

  @ViewChild('content', {static:false}) el!:ElementRef;

  downloadPDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save('Informe.pdf');
      }
    })
    
  }


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