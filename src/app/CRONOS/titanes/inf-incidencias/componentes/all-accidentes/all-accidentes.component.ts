import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import jsPDF  from 'jspdf';
import { style } from '@angular/animations';

@Component({
  selector: 'app-all-accidentes',
  templateUrl: './all-accidentes.component.html',
  styleUrls: ['./all-accidentes.component.css']
})
export class AllAccidentesComponent {

  fechahoy:Date=new Date()

  @ViewChild('content', {static:false}) el!:ElementRef;

  downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save('ACCIDENTES REGISTRADOS'+ (this.fechahoy) + '.pdf');
      }
    })
    
  }

  accidentes:any=[];

  constructor (private http:HttpClient, private location: Location, private sanitizer:DomSanitizer){
  };

  getAccidenteAHT(){
    this.http.get('https://prueba252.somee.com/api/ver_Registro_de_accidentes').subscribe(response=>{
     this.accidentes=response
     console.log(this.accidentes)
     
    })
    }   
   ngOnInit(): void {
    setInterval(() => {
       this.getAccidenteAHT();
      },1000)
   }

}
