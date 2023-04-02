import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { InformeLimpiezaCrudService } from 'src/app/Servicios/informe-limpieza-crud.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import jsPDF  from 'jspdf';
import { style } from '@angular/animations';



@Component({
  selector: 'app-semanal',
  templateUrl: './semanal.component.html',
  styleUrls: ['./semanal.component.css']
})

export class SemanalComponent implements OnInit{
  fechahoy:Date=new Date()

  @ViewChild('content', {static:false}) el!:ElementRef;

  downloadPDF(){
    let pdf = new jsPDF('p','pt','a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.addImage("../../../../../assets/logo_sitmah.jpeg", "JPEG", 50, 50, 50, 50);
        pdf.setFontSize(25);
        pdf.text('INFORME DE LIMPIEZA',50,30)
        pdf.save('Informe-pasado'+ (this.fechahoy) + '.pdf');
      }
    })
    
  }

  term: any;
  tempEst: any;
  semanales:any=[];

  constructor ( private http:HttpClient){
  };

  getSemanal(){
   this.http.get('https://prueba252.somee.com/api/resumen_limpieza').subscribe(data=>{
      console.log(data)
      this.semanales=data
    })
  }

  ngOnInit(): void {
    setInterval(() => {
    this.getSemanal();
  }, 500)
  }



}
