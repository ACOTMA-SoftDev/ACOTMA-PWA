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
  selector: 'app-registro-vehi',
  templateUrl: './registro-vehi.component.html',
  styleUrls: ['./registro-vehi.component.css']
})
export class RegistroVehiComponent implements OnInit{
  term:any;
  RegistroVehicular:any=[];//recolectamos todos los datos para luego mostrarlos

  fechahoy:Date=new Date()

  @ViewChild('content', {static:false}) el!:ElementRef;

  downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        //pdf.addImage("../../../../../assets/logo_sitmah.jpeg", "JPEG",50, 50, 50, 50);
        //pdf.setFontSize(25);
        //pdf.text('REGISTRO VEHICULAR',40,30);
        pdf.save('REGISTRO-VEHICULAR'+ (this.fechahoy) + '.pdf');
      }
    })
    
  }

	constructor(private http:HttpClient) {}
   //creamos un contrucutor
   title = 'Informe de accidentes';

   getAllEstacionesToday(){
    this.http.get('https://prueba252.somee.com/api/ver_Registro_Vehicular').subscribe(data=>{
      console.log(data)
      this.RegistroVehicular=data
    })
    }

  ngOnInit(): void {
    setInterval(() => {
    this.getAllEstacionesToday();
  }, 1300)
  }

}
